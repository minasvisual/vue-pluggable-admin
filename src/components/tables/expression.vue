<template>
    <span v-html="expression" v-on="$listeners"></span >
</template>

<script> 
import _ from 'lodash' 
export default {
    props:['data', 'cell', 'row'],
    computed:{ 
        expression(){ 
            let compiled = _.template(_.get(this.cell, 'action.template', '${ data }'));
            return compiled({data: this.data, cell: this.cell, row: this.row}) 
        }
    }
}
</script>