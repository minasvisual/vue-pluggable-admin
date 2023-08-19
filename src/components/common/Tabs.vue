<template> 
	<section class="tabs">
		<ul class="flex my-2 w-full border-b">
			<li class="mr-2 -mb-px" v-for="(tb, ky) of tabs" :key="ky" >
				<a @click="changeTab(tb)" href="#" :class="{'active': active == tb.name }"
						class="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
					{{ tb.label }}
				</a>
			</li>
		</ul>
	</section>
</template>


<script setup>  
  import { computed, onMounted, onBeforeUnmount, ref, reactive } from "vue"

  const { tabs:tabes , tab } = defineProps(['tab', 'tabs'])  
  const tabs = ref(tabes) 
  const active = ref('') 
  let styleTag = reactive() 
		
  function changeTab(tb){
    if( tabs.value?.length === 0 ) return ;

    active.value = tb.name

    if( styleTag ) styleTag.remove();

    const css = `
      ${ tabs.value.map(i => i.name).join(',') }{
        display: none;
      } 
      ${tb.name}{
        ${ tb.enabledStyle ? `${ tb.enabledStyle } ${ tb.enabledStyle.includes('important') ?'':'!important' }` : 'display: flex; flex-direction: column;' }
      }
    `;
    styleTag = document.createElement('style');
    styleTag.appendChild(document.createTextNode(css));
    document.head.appendChild(styleTag);
  }  
  
  onMounted(() => {
		if( tabs.value?.length === 0 ) return ;

		changeTab(tabs.value[0])
		active.value = tabs.value[0].name
  })

  onBeforeUnmount(() => {
    styleTag.remove();
  }) 
</script>

<style lang="scss">
.tabs{
	ul {
		border-bottom-color: blue;
		li .active{
			color: blue;
			border: 1px solid blue;
			border-bottom-color: white;
		}
	}
}
</style>
// {
// 	"component": "tabs",
// 	"class": "d-flex",
// 	"tab": "num1",
// 	"tabs": [
// 		{
// 			"name": ".tab2",
// 			"label": "ID"
// 		},
// 		{
// 			"name": ".tab3",
// 			"label": "Created"
// 		}
// 	]
// },
// {
// 	"component": "div",
// 	"class": "d-flex tab2",
// 	"tab": "num2",
// 	"children": [
// 		{
// 			"name": "outro",
// 			"label": "OUtro",
// 			"hidden": false,
// 			"config": {
// 				"grid": true
// 			},
// 			"depth": 2
// 		},
// 		{
// 			"name": "outrotrou",
// 			"label": "OUtro",
// 			"config": {
// 				"grid": true,
// 				"sort": 1
// 			},
// 			"depth": 2
// 		}
// 	]
// },
// {
// 	"component": "div",
// 	"class": "d-flex tab3",
// 	"tab": "num3",
// 	"children": [
// 		{
// 			"name": "title",
// 			"label": "Title",
// 			"config": {
// 				"grid": true
// 			},
// 			"depth": 2
// 		},
// 		{
// 			"name": "artist_name",
// 			"label": "Artist",
// 			"config": {
// 				"grid": true,
// 				"sort": 1
// 			},
// 			"depth": 2
// 		}
// 	]
// }