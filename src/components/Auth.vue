<template >
  <Fragment>
    <section v-if="login"> 
      <slot v-bind:schema="schema" v-bind:methods="{ logout }" v-bind:session="session">
        vazio
      </slot>
    </section>
    <section v-else class="auth-form w-1/3 mx-auto"> 
        <h3 v-if="loading" class="text-center">
          <Spinner>>Authenticating...</Spinner>  
        </h3>
        <FormKit 
          v-else
          type="form"
          form-class="flex flex-col gap-4"
          method="post"
          v-model="form"
          @submit="doAuth"
          :actions="false"
          #default="{ hasErrors }"
        >

          <h4 class="text-center py-4">Project Authentication</h4>
          
          <FormKit  type="text" name="username" placeholder="Username" validation="required" /> 

          <FormKit  type="password" name="secret"  placeholder="Password" validation="required" /> 

          <FormKit  type="checkbox" name="remember" label="Keep logged" wrapperClass="flex gap-2" innerClass="w-6"/> 

          <div class="action-buttons mt-3 flex gap-4">
            <button
              type="button"
              color="danger"
              class="py-2 px-4 border bg-red-800 text-white rounded hover:text-gray-400"
              @click="$emit('close', { refresh: false })"
            >
                Cancel
            </button>
            <button
              type="submit"
              color="success"
              class="py-2 px-4 border bg-green-800 text-white rounded hover:text-gray-400"
              :disabled="hasErrors"
            >
                Send
            </button>
          </div>
        </FormKit>
    </section> 
  </Fragment>
</template>

<script setup> 
  import { ref, computed, nextTick, onMounted } from 'vue'
  import _ from 'lodash'
  import axios from 'axios' 
  import Resource from '../libs/resource'
  import { getErrorMessage, mergeDeep } from '../libs/helpers' 
  import Fragment from './common/Fragment.vue' 
  import Spinner from './common/Spinner.vue' 

  const Instance = Resource({ $axios: axios })
  const emit = defineEmits(['auth:failed','auth:logged','update:schema'])
  const { schema, config = {} } = defineProps(['schema', 'config'])

  let loading = ref(true)
  let form = ref({})
  let login = ref(false)
  let session = ref({})
  Instance.setModel(schema)  
  Instance.setConfig(config)  
 
  let hasAuth = computed(() => {
    return _.has(config, 'auth')
  }) 
  
  const doAuth = async (form) => {
    try{
      loading.value = true;
      let res = await Instance.authenticate(form)
      
      return await Instance.checkAuth(true).then(success).catch(error)
    }catch(e){
      console.error( getErrorMessage(e) ) 
      loading.value = false;
    }
  }

  const success = function(res){ 
    console.debug("called success", res)
    session.value = res;

    if( !_.has(session.value, 'token') ) {
      loading.value = false;
      return emit('auth:failed', {message: 'token not found', ...res })
    } 
     
    emit(
      'update:schema', 
      mergeDeep(schema, { api: _.get(session.value, 'request', {}) })
    )
    emit('auth:logged', _.pick(session.value, ['token','user','logged']))

    nextTick(() => {
      loading.value = false;
      login.value = true;
    })
  }
  
  const error = function({ response, message, ...data }){
    // app.message( getErrorMessage({ response, message, ...data }) )
    console.log('Auth Error', message, response, data)
    loading.value = false;
    login.value = false;
    
    emit('auth:failed', {message})
  }

  const logout = () => {
    console.debug("called auth logout")
    loading.value = true;
    return Instance.logout().then(() => {
      loading.value = false;
      login.value = false;
      console.debug("finish auth logout")
    })
  }  
      
  onMounted(async () => {
    try{  
      if( !hasAuth.value || !Instance.isIt('logged') ) {
        console.debug('bypassed auth', hasAuth.value, Instance.isIt('logged') )
        login.value = true  
        loading.value = false; 
        return;
      }

      console.debug('auth process start')
      let token = Instance.getToken()
      session.value = Instance.getSession() 

      loading.value = true;
      if( token && _.get(session.value, 'logged', false) ){
        // emit('auth:logged', session.value)  
        success(session.value)
      }else if( token ){
        await Instance.checkAuth().then(success)
      }else{ 
        login.value = false;
        console.debug('show login form') 
      } 
      
      loading.value = false; 
    }catch(e){
      login.value = false;
      emit('auth:failed', e)
      console.debug('erro mounted auth', e)
      console.error( getErrorMessage(e) )
      
      loading.value = false; 
    }  
  }) 
</script>

<style lang="scss">
.auth-form {
  .formkit-outer {
    .formkit-input{
      border-radius: 0.25rem;
    }
    .formkit-message {
      font-size: 0.8em;
      color: red;
    }
  } 
}
</style>