<template>
  <div >
    <img  @click="showModal(data)" :src="data" style="height: 30px; width:auto" @error="replaceByDefault" />
    <div class="modal fixed w-full h-full bg-black/20 left-0 top-0" v-if="formopen">
      <div class="absolute -translate-x-1/2 left-1/2 bg-white p-4 rounded-lg my-2 text center">
        <button @click="e => formopen = false" class="absolute right-0 top-0">&#10006;</button>
        <img :src="pic" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['data', 'cell'],
    data(){ return{
        formopen: false,
        pic: false
    }},
    methods: {
        replaceByDefault(e) {
            e.target.src = ''
        },
        showModal(item){ 
           this.$emit("click", this.data)
           this.pic = item
           this.formopen = true
        }
    }
}
</script>