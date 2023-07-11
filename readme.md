# Under construction (not stable)
- this module can contains break changes until it is in beta version

# About
Inspired on :
- react admin: https://marmelab.com/react-admin/Admin.html
- Md-crud angular: https://github.com/ClassHP/md-crud

# Pluggable module roadmap
- [ ] Formkit custom input install
- Table
  - Local
  - [X] Filtering
  - [X] LImit
  - [X] Sorting
  - [X] Delete local
  - [X] Get local
  - [ ] Formkit custom input install
- Form
  - [ ] Local
  - [ ] CRUD 
  - [ ] Get local
  - [X] Formkit custom input install
- Auth 
  - [] Login 
  - [] Logged
  - [] Logout

# Demo
https://stackblitz.com/edit/vitejs-vite-shfymz

# Schema docs
- See Github Wiki - https://github.com/minasvisual/vue-pluggable-admin/wiki

# Installation 

## Vue 3

```shell
npm install vue3-pluggable-admin @formkit/vue
```

main.ts
```ts 
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

# Nuxt 3
- SOON

app.vue
```vue
<template>
  <main class="w-full m-auto">
    <CrudTable :model="schema" @create="e => setData(e.row)" @edit="e => setData(e.row)" />

    <div class="p-4" v-if="data">
      <button @click="e => setData(null)">&#10006;</button>
      <CrudForm
        :model="schema"  
        :data="data"  
      />
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
