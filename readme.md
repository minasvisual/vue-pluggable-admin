# Under construction (not stable)
- this module can contains break changes until it is in beta version

# About
Inspired on :
- react admin: https://marmelab.com/react-admin/Admin.html
- Md-crud angular: https://github.com/ClassHP/md-crud

# Pluggable module roadmap 
- General
  - [X] Nested CRUD
  - [ ] Group package

- Table
  - [X] Local
  - [X] Filtering
  - [X] LImit
  - [X] Sorting fields
  - [X] Delete local
  - [X] Get local
  - [X] Refresh public method
  - [X] Formkit custom input install
  - [X] Schema Sorting rows local
  - [X] Default Action permissions 
  - [X] Errors alerts
  - [X] Slots (toolbar|header|footer|row actions)
    - Toolbar (toolbar-left, toolbar-center, toolbar-right)
    - header (header-scope, header-actions)
    - row (row-scope, row-actions)
    - footer (footer-scope, footer-actions)
    - pagination 
  - Custom views 
    - [ ] currency 
    - [ ] toggle 
    - [ ] autocomplete
    - [ ] dynamic
    - [ ] Subform
    - [ ] Grid 
- Form
  - [X] CRUD 
  - [X] Formkit custom input install
  - [X] Get local
  - [X] Tabs
  - [X] Local
  - [X] Slots (alert|prefix|suffix|error)
  - [X] Errors alerts
  - [ ] Dynamic/select accept object loops
  - [ ] Object lists dynamic
  - Custom inputs 
    - [x] HasOne 
    - [x] hasMany
    - [ ] Collection
    - [ ] Subform
    - [ ] Grid
    - [ ] Json
    - [ ] Editor
- Auth 
  - [X] Login 
  - [X] Logged
  - [X] Logout
- Events 
  - [ ] Global event bus

- BUGS
  - [ ] Filter duplicate when change page or limit
# Demo
https://stackblitz.com/edit/vitejs-vite-shfymz

# Schema docs
- See Github Wiki - https://github.com/minasvisual/vue-pluggable-admin/wiki

# Installation 

```shell
npm install vue3-pluggable-admin @formkit/vue
```

index.html (Tailwind CSS basic styles)
```html
<head>
  <script src="https://cdn.tailwindcss.com?plugins=forms"></script>
  ...
</head>
```

## Vue 3
main.ts
```ts 
import 'vue3-pluggable-admin/dist/vue3-pluggable-admin.css'
import { CustomInputs, CustomPlugins, Pluggable } from 'vue3-pluggable-admin';
import { plugin, defaultConfig } from '@formkit/vue'

//After const app = createApp(App)
app.use(plugin, defaultConfig({
  inputs:{
    ...CustomInputs // Add custom pluggable inputs 
    // you can add yours: check docs https://formkit.com/guides/create-a-custom-input
  },
  plugins:[
    ...CustomPlugins, // Add custom pluggable plugins (masks, date format)
    // you can add your plugins: check docs https://formkit.com/essentials/examples#plugins
  ]
}))
app.use(Pluggable)
```

## Nuxt 3
- SOON

## Astro + Vue
1. Follow astro vue instructions
2. Add app entrypoint: https://docs.astro.build/pt-br/guides/integrations-guide/vue/#appentrypoint\ 

_app.ts
```ts 
import 'vue3-pluggable-admin/dist/vue3-pluggable-admin.css'
import type { App } from 'vue';
import { CustomInputs, Pluggable } from 'vue3-pluggable-admin';
import { plugin, defaultConfig } from '@formkit/vue'

export default (app: App) => { 
  app.use(plugin, defaultConfig({
    inputs:{
      ...CustomInputs  
    },
    plugins:[
      ...CustomPlugins
    ]
  }))
  app.use(Pluggable)
};
```


# Basic usage
app.vue
```
<template> 
    <CrudFlow :schema="{
        properties:[
          {
            'name': 'name',
            'label': 'Name',
            'config': {
              'grid': true
            }
          }
        ],
        api:{
          'rootApi': 'https://jsonplaceholder.typicode.com/users',
          'pagination':{
            'local': true
          }
        }
      }" 
    /> 
</template>
 
```
- Properties: Grid and form fields/columns
- Api: Json source http config


# Advanced usage
app.vue
```vue
<template>
  <main class="w-full m-auto">
    <CrudTable 
      :model="schema" 
      @create="e => setData(e.row)" 
      @edit="e => setData(e.row)" 
    />

    <div class="modal fixed w-full h-full bg-black/20 left-0 top-0" v-if="data">
      <button class="absolute right-0"
          @click="e => setData(null)"
       >
        &#10006;
      </button>
      <div class="absolute w-1/2 -translate-x-1/2 left-1/2 bg-white p-4 rounded-lg my-2 max-h-[95vh] overflow-y-auto">
        <CrudForm
          :model="schema"  
          :data="data"  
           @saved="setData(null)"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">  
  import { ref, nextTick } from 'vue'  
  const data = ref()

  const schema = {
    properties:[
      {
        "name": "name",
        "label": "Name",
        "config": {
          "grid": true
        }
      }
    ],
    api:{
      "rootApi": "https://jsonplaceholder.typicode.com/users",
      "pagination":{
        "local": true
      }
    }
  }

  function setData (newVal) {
    data.value = null
    nextTick(() => {
      data.value = newVal
    })
  }
</script>
```


# Auth usage
app.vue
Login test (https://fakestoreapi.com/docs):
- username: mor_2314
- password: 83r5^_
```vue
<template>
  <CrudAuth 
    v-model:schema="schema" 
    :config="schema"
    #default="{ methods:{logout}, session:{user, logged} }"
  >     
    <button v-if="logged" @click="logout">{{ user.name }} - Logout</button>

    <CrudFlow :schema="schema" /> 
  </CrudAuth>    
</template>

<script setup lang="ts">  
import { ref } from 'vue'   
 const schema = ref({  
    "auth":{ 
      "url_login": "https://fakestoreapi.com/auth/login", 
      "field_username": "username",
      "field_secret": "password",  
      "response_token": "token",                              // {"token":"xyz"}
      "request_mode": "header",                               // logged requests method
      "request_token": "Authorization",                       // header field
      "request_token_expression": "Bearer {token}",           // header value
      "logged_url": "https://fakestoreapi.com/users/1",       // get user data
      "logged_model": {                                       // user response data map { id:1, username:'', email:'' }
        "id": "id",
        "name": "username",
        "username": "email",
        "role": "level"
      }
    },
    "properties":[
      { "name":"id", "config":{ "grid":true } }, 
      { "name":"email", "config":{ "grid":true } }, 
      { "name":"username", "config":{ "grid":true } }, 
    ],
    "api":{
      "rootApi": "https://fakestoreapi.com/users",
      "pagination":{
        "local": true
      }
    }
  })
</script>
```
