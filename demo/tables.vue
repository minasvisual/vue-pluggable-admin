<template> 
    <FormKitSchema :schema="header"  />  
		<Table 
			:model="chema" :resource="resource" 
			@create="doEvent"
			@edit="doEvent"
			@delete="doEvent"
			@selected="doEvent"
			@refresh="doEvent"
		/>
    <FormKitSchema :schema="footer"  />  
</template>

<script setup>
	import { Table } from '@/pluggable/components'  
 
	const header = [
		{
			$el: 'nav',
			attrs:{
				class: 'navbar is-light',
				role:"navigation",
				ariaLabel:"main navigation"
			},
			children: [ 
				{ 
					$el: 'div',
					attrs:{
						class:'navbar-brand'
					},
					children: [
						{ $el:'div', attrs:{class:'navbar-item'}, children:[
							{ $el: 'img',	attrs:{ src:"https://bulma.io/images/bulma-logo.png", width: 112} }
						]},
						{ $el:'a', attrs:{class:'navbar-burger'}, children:[
							{ $el: 'span',	attrs:{ 'aria-hidden':"true" } }
						]}
					]
				},
				{ 
					$el: 'div', attrs:{	class: 'navbar-menu' }, children: [
						{ 
							$el:'div', attrs:{ class:'navbar-end' }, children:[ 
								{ $el:'a', attrs:{ class:'navbar-item', active: true }, children:'Home' },
								{ $el:'a', attrs:{ class:'navbar-item', active: true }, children:'Documentation' }, 
							] 
						},	
						{ 
							$el:'div', attrs:{ class:'navbar-start' }, children:[ 
								{ $el:'a', attrs:{ class:'navbar-item', active: true }, children:'Sign In' },
								{ $el:'a', attrs:{ class:'navbar-item', active: true }, children:'Sign Up' }, 
							] 
						},
					]
				},
			]
		}, 
	]
	const footer = [
			{
					$el: 'section', attrs:{class:'section has-background-light'} 
			}, 
	]
	const chema = {
		"type": "object",
		"title": "Basic",
		"primaryKey": "id",
		"domain": "basic",
		"properties": [
			{
				"$el": "h2",
				"children": "Fake Rest API"
			},
			{
				"name": "id",
				"label": "ID",
				"readonly": true,
				"config": {
					"grid": true,
					"sort": 1,
					"filter": {
						"filterExp": "{prop},eq,{value}"
					}
				}
			},
			{
				"$el": "div",
				"attrs":{"class": "flex gap-2"},
				"children": [
					{
						"name": "name",
						"label": "Name",
						"config": {
							"grid": true,
							"sort": 1
						},
						"depth": 2
					},
					{
						"name": "email",
						"label": "Email",
						"config": {
							"grid": true,
							"sort": 1
						},
						"depth": 2
					},
					{
						"name": "phone",
						"label": "Phone",
						"mask": "(000) [000] 0000-0000",
						"config": {
							"grid": true,
							"sort": 1
						},
						"depth": 2
					},
					{
						"name": "gender",
						"label": "Gender",
						"type": "select",
						"config": {
							"grid": true, 
							"filter": {
								"type": "select",
								"options": [
									{
										"value": "male",
										"label": "Male"
									},
									{
										"value": "female",
										"label": "Female"
									}
								]
							}
						},
						"options": [
							{
								"value": "male",
								"label": "Male"
							},
							{
								"value": "female",
								"label": "Female"
							}
						],
						"depth": 2
					}
				]
			},
			{
				"name": "addresses",
				"type": "group",
				"config":{
					"grid": true,
					"type": "expression",
					"action":{
						"template": "<% _.forEach(data, function(d) { %><%- d.street %>, <% }); %>"
					}
				},
				"children": [
					{
						"$el": "div",
						"attrs":{"class": "flex gap-2"},
						"children": [
							{
								"name": "street",
								"label": "Street",
								"depth": 2
							},
							{
								"name": "suite",
								"label": "Suite",
								"depth": 2
							},
							{
								"name": "city",
								"label": "City",
								"depth": 2
							}
						]
					}
				]
			},
			{
				"name": "website",
				"label": "Website",
				"type": "editor"
			}
		],
		"api": {
			"rootApi": "https://jsonplaceholder.typicode.com/users",
			"getData": false,
			// "getDataById": false,
			// "deleteDataById": false,
			"pagination": {
				"local": true,
				"pageField": "page",
				"limitField": "per_page",
				"sortField": "direction",
				"sortExp": "{sort}",
				"filterField": "filter",
				"filterExp": "{prop},like,%{value}%"
			},
			// "params": {
			// 	"page": 1,
			// 	"per_page": 15,
			// 	"direction": "desc"
			// },
			"headers": {
				"Accept": "application/json"
			}
		}
	}
	const resource = [
		{
			"id": 1,
			"name": "Leanne Graham",
			"username": "Bret",
			"email": "Sincere@april.biz",
			"gender": "male",
			"addresses": [
				{
					"street": "Kulas Light",
					"suite": "Apt. 556",
					"city": "Gwenborough",
					"zipcode": "92998-3874",
					"geo": {
						"lat": "-37.3159",
						"lng": "81.1496"
					}
				},
				{
					"street": "Light Street",
					"suite": "556",
					"city": "london",
					"zipcode": "192168-874",
					"geo": {
						"lat": "-37.8159",
						"lng": "80.9496"
					}
				}
			],
			"phone": "1-770-736-8031 x56442",
			"website": "hildegard.org",
			"company": {
				"name": "Romaguera-Crona",
				"catchPhrase": "Multi-layered client-server neural-net",
				"bs": "harness real-time e-markets"
			}, 
		},
		{
			"id": 2,
			"name": "Ervin Howell",
			"username": "Antonette",
			"email": "Shanna@melissa.tv",
			"address": [
				{
					"street": "Victor Plains",
					"suite": "Suite 879",
					"city": "Wisokyburgh",
					"zipcode": "90566-7771",
					"geo": {
						"lat": "-43.9509",
						"lng": "-34.4618"
					}
				}
			],
			"phone": "010-692-6593 x09125",
			"website": "anastasia.net",
			"company": {
				"name": "Deckow-Crist",
				"catchPhrase": "Proactive didactic contingency",
				"bs": "synergize scalable supply-chains"
			}
		}
	]

	function doEvent(e){
		// console.log( 'Event received', JSON.stringify(e, null, 2))
	}
</script>