<template>  
    <CommonsFragment v-if="cell.type == 'tags'">
        <Tags :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"  />
    </CommonsFragment>
    <CommonsFragment v-else-if="cell.type == 'image'">
        <ImgCell :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"  />
    </CommonsFragment>
    <CommonsFragment v-else-if="cell.type == 'switch' || cell.type == 'toggle'">
        <Toggle :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"  />
    </CommonsFragment> 
    <CommonsFragment v-else-if="cell.type == 'select' || cell.type == 'autocomplete' || cell.type == 'dynamic'" v-on:click="emitAction" >
        <GridSelect :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"   />
    </CommonsFragment>
    <!-- <span v-else-if="cell.type == 'belongsTo'">
        <BelongsTo :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"   />
    </span>  -->
    <CommonsFragment v-else-if="cell.type == 'link'">
        <HrefLink :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"  />
    </CommonsFragment>    
    <CommonsFragment v-else-if="cell.type == 'expression'">
        <Expression  :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"   />
    </CommonsFragment>
    <span v-else-if="cell.type == 'date'" v-on:click="emitAction" >
        <Dates :data="data[cell.key]" :cell="cell" :row="data" v-on:click="emitAction"   />
    </span>
    <!-- <span v-else-if="cell.type == 'action'"  >
        <Actions :data.sync="data[cell.key]" :cell.sync="cell" :row.sync="data" />
    </span> -->
    <span v-else-if="cell.type == 'object'" v-text="get(data, `${cell.action.name}`, data[cell.key])" v-on:click="emitAction" ></span>
    <span v-else-if="cell.type == 'html'" v-html="data[cell.key]" v-on:click="emitAction" ></span>
    <span v-else v-text="data[cell.key]" v-on:click="emitAction" ></span>
</template>

<script setup>  
import _ from 'lodash'
import ImgCell from './image.vue'
import Tags from './tags.vue'
import HrefLink from './link.vue'
import Expression from './expression.vue'
import GridSelect from './select.vue'
import Toggle from './toggle.vue' 
import Dates from './dates.vue' 
import { computed, } from 'vue'
// import Actions from './action'
// import BelongsTo from './belongsTo'
const { get } = _
const { data, cell } = defineProps(['data','cell'])  
const inputType = computed(() => {
    return get(cell, 'click.type', 'link')
})  

function emitAction(){
    // if( this.cell.type == 'action' || !this.cell.action || !this.cell.action.event || this.cell.action.event != 'click' ) 
    //     return;

    // this.$bus.$emit(this.cell.action?.handler, this.sendType(this.cell, this.data, this.data[this.cell.key]) )
    // console.log("chamado event", this.cell)
}
</script>

<style lang="scss">
.cell select{
  background: transparent !important;
  border: none;
  -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}
.cell .form-group{
  padding:0  !important;
  margin:0 !important;
}
</style>