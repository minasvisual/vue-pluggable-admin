<template>
    <a :href="cell?.action?.handler" :target="(cell?.action?.target ?? '_self')" v-html="replaceContent()"></a>
</template>
<script>
import { template } from 'lodash'

export default {
    props:['data', 'cell', 'row'],
    methods: {
        replaceContent() {
            if( this.cell?.action?.label ) 
                return template(this.cell.action.label)({data: this.data, action: this.cell.action, row: this.row  })
            else
                return this.data
        }
    }
}
</script>