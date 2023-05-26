<template>
    <select 
        class="table-select"
        v-if="renderComponent" 
        :value="data"
        size="sm" 
        disabled
    >
        <!-- v-on="$listeners" -->
      <option v-for="(opt, idx) of (cell.options || options)" :key="idx" :value="opt.value">{{ opt.label }}</option>
    </select>
</template>


<script> 
import { filterParams, mergeDeep, interpolate, } from '../../libs/helpers'
import Resource from '../../libs/resource'
import axios  from 'axios'
// import InputMixin from '~/libs/core/input.mixin'

export default {
  props:['data', 'cell'],
  // mixins: [InputMixin],
  data(){return{ 
    Instance: Resource({ $axios: axios }),  
  }},
  computed:{

  },
  async mounted(){
    let { action, model } = this.cell
    this.Instance = Resource
    // if( schema )
    //   schema = await this.loadNestedSchema(schema)
      
    // if( action && action.fieldValue )
    //   schema = { api:  }

    if( model && model.api  )
      this.cell.options = await this.getOptions(
          { ...model.api, ...action }, 
          this.data, 
          filterParams(model.api, { filters:[{prop: action.fieldValue, value: this.data}] }) 
      )

    this.renderComponent = true
  },
  methods:{ 
    forceRerender() {
      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      });
    }, 
    async getOptions({ rootApi, fieldLabel, fieldValue, ...data }, model = {}, filter={}){
      try{ 
        // console.debug("input mixin get options", { rootApi, fieldLabel, fieldValue, ...data })
        if( rootApi ){
          this.loading = true;
          data = mergeDeep(data, this.request)
          if( typeof filter == 'object' )
            data = mergeDeep(data, filter)

          rootApi = interpolate(rootApi, { data: model })
 
          this.Instance.setModel({ api: { ...data, rootApi, resource: this.formValues } })

          // console.log("getOoptions", this.Instance.getModel())
          let { rows } = await this.Instance.getData({ data: model }) 

         this.options = rows && rows.map((i, k) => ({ 
              label: get(i, fieldLabel, i.toString()), 
              value: get(i, fieldValue, k)
            }) 
          )
          
          this.loading = false;
          this.forceRerender()
          return this.options
        }
      }catch(e){
          alert('Erro to get data from '+ rootApi)
          console.error('Erro select input', e)
          return this.options
      }
    },
  }
}
</script>

<style lang="css">
  .table-select{
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    border: none  !important;
    background-color: transparent !important;
    color: #333;
  }
</style>