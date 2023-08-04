# Under construction (not stable)
- this module can contains break changes until it is in beta version

# About
Inspired on :
- react admin: https://marmelab.com/react-admin/Admin.html
- Md-crud angular: https://github.com/ClassHP/md-crud

# Pluggable module roadmap 
- Table
  - Local
  - [X] Filtering
  - [X] LImit
  - [X] Sorting fields
  - [X] Delete local
  - [X] Get local
  - [X] Formkit custom input install
  - [X] Schema Sorting rows local
- Form
  - [X] CRUD 
  - [X] Formkit custom input install
  - [X] Get local
  - [ ] Local
- Auth 
  - [ ] Login 
  - [ ] Logged
  - [ ] Logout

# Demo
https://stackblitz.com/edit/vitejs-vite-shfymz

# Schema docs
- See Github Wiki - https://github.com/minasvisual/vue-pluggable-admin/wiki

# Installation 

```shell
npm install vue3-pluggable-admin @formkit/vue
```

## Vue 3
main.ts
```ts 
import 'vue3-pluggable-admin/dist/vue3-pluggable-admin.css'
import { CustomInputs, Pluggable } from 'vue3-pluggable-admin';
import { plugin, defaultConfig } from '@formkit/vue'

//After const app = createApp(App)
app.use(plugin, defaultConfig({
  inputs:{
    ...CustomInputs // Add custom pluggable inputs 
    // you can add yours: check docs https://formkit.com/guides/create-a-custom-input
  }
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
    }
  }))
  app.use(Pluggable)
};
```

# Basic usage
app.vue
```vue
<template>
  <main class="w-full m-auto">
    <CrudTable :model="schema" @create="e => setData(e.row)" @edit="e => setData(e.row)" />

    <div class="modal fixed w-full h-full bg-black/20 left-0 top-0" v-if="data">
      <button @click="e => setData(null)" class="absolute right-0">&#10006;</button>
      <div class="absolute w-1/2 -translate-x-1/2 left-1/2 bg-white p-4 rounded-lg my-2">
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

index.html (Tailwind CSS basic styles)
```html
<head>
  <script src="https://cdn.tailwindcss.com?plugins=forms"></script>
  ...
</head>
```
