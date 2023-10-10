import _, { filter } from 'lodash'
import { interpolate, queryString } from './helpers'
const { get, set, has, isNil, isEmpty } = _

export default ({ $axios,  }) => {
  let modelUrl = null
  let config = {}
  let model = {}
  let schema = []
  let row = {}
  let session = {}
  let sorter = null
  // table
  let rows = {}
  let total = 1
 
  // Schema 
  const setConfig = (input) =>{
    config = input
  }

  const setModel = (modelObj={}) => {
    model = JSON.parse(JSON.stringify(modelObj))
    schema = model.properties
  }

  const getModel = () => {
    return model
  }

  const loadModel = async (url, options) => {
    return await $axios.get(url, options).then( res => {
        console.log("loadModel "+url, res)
        if( !res.api ) throw { message: "Model Load error" }

        return res
    })
  }

  const loadModelByUrl = async (path='', file) => {
    try {
      modelUrl = `/models/${path}${file}`
      let { data } = await $axios.get(modelUrl)
      if( !data.domain )
        throw { message:'Model load error' }

      model = data

      return data
    } catch (error) {
      console.error("loadModelByUrl", error)
      return false
    }
  }

  const can = (perm) => {
    if( perm == 'getData' ){
      return get(model, 'api.getData', true)
    }
    if( perm == 'getDataById' ){
      return get(model, 'api.getData', true)
    } 
    if( perm == 'deleteDataById' ){
      return get(model, 'api.deleteDataById', true)
    } 

    return true
  }

  const isIt = (perm) => {
    if( perm == 'local' ){
      return get(model, 'api.pagination.local', false)
    } 
    if( perm == 'sorter' ){
      return sorter
    }
    if( perm == 'logged' ){
      return get(model, 'auth', false)
    }
    return false
  }

  // Data
  const setData = (resource, filters) => { 
    console.log('setData', resource, filters)
    let data = resource
    let isRow = has(data, `[${model.primaryKey || 'id'}]`) || model.type == 'form'
    let api = get(model, 'api', {}) 

    if( isRow ){
      return ( !isNil(api.wrapDataById) ? get(data, api.wrapDataById, data): data)
    }else{
      rows = ( !isNil(api.wrapData) ? get(data, api.wrapData, data): data)
      total = ( !isNil(api.totalData) ? get(data, api.totalData, rows.length): rows.length )

      if( !Array.isArray(rows) ) rows = [rows]
      if( typeof total !== 'number' ) total = rows.length

      if( filters?.filters && Array.isArray(filters?.filters) && filters?.filters?.length > 0 ){
        rows = filterLocal(filters.filters)
        total = rows.length
      }

      if( !filters?.sort )
        filters.sort = getSchemaSort()
      if( filters?.sort )
        rows = sortLocal(filters.sort)
 
      return {
        rows,
        total
      }
    }
  }

  const getData = async (data={}, config={}) => {
    console.log("called get data", data, config)
    let { api = {} } = model;
    if( api.resource && isEmpty(data.data) ) data.data = api.resource
    let primaryKey = (model?.primaryKey || 'id')

    let url = ''
    let isRow = has(data, `[${model.primaryKey || 'id'}]`) || model.type == 'form'
    let options = {
      method: ( isRow ? ( isNil(api.methodGetById) ? 'GET':api.methodGetById) : (isNil(api.methodGet) ? 'GET':api.methodGet) ),
      ...config
    } 
    let sessionConfig = {
      session: model.auth
    }

    let query = queryString(api.params, ( api.rootApi.includes('?') ? '&':'?'), data)

    if( isRow )
      url = `${api.rootApi}${ isNil(api.urlGetById) ? '/{'+primaryKey+'}{query}': api.urlGetById }`
    else
      url = `${api.rootApi}${ isNil(api.urlGet) ? '{query}': api.urlGet }`

    if( api.headers )
      options['headers'] = api.headers
    
    url = interpolate(url, {...data, query })
  
    // console.debug('get data', url, options, sessionConfig)
    return $axios(url, options, sessionConfig)
    .then( data => {  
      data = sessionConfig.wrap === false ? data : data.data

      if( isRow ){
        return ( !isNil(api.wrapDataById) ? get(data, api.wrapDataById, data): data)
      }else{
        rows = ( !isNil(api.wrapData) ? get(data, api.wrapData, data): data)
        total = ( !isNil(api.totalData) ? get(data, api.totalData, rows.length): rows.length )

        if( !Array.isArray(rows) ) rows = [rows]
        if( typeof total !== 'number' ) total = rows.length
  
        return {
          rows,
          total
        }
      }
    })
  }
  
  const getDataObject = async (data={}, config={}) => { 
    let { api = {} } = model;
    if( api.resource && isEmpty(data.data) ) data.data = api.resource
 
    let url = ''
    let options = {
      method:  isNil(api.methodGet) ? 'GET': api.methodGet,
      ...config
    } 
    let sessionConfig = {
      session: model.auth
    }

    let query = queryString(api.params, ( api.rootApi.includes('?') ? '&':'?'), data)
  
    url = `${api.rootApi}${ isNil(api.urlGet) ? '{query}':api.urlGet }`

    if( api.headers )
      options['headers'] = api.headers
    
    url = interpolate(url, {...data, query })
    
    console.debug('get data object', url, options, sessionConfig)
    return $axios(url, options, sessionConfig)
        .then(({data}) => {   
          return ( !isNil(api.wrapData) ? get(data, api.wrapData, data): data) 
        })
  }
    
  const saveData = async (data, config={}) => { 
    let { api = {} } = model; 
    let resource = api.resource || {}
    let url = ''
    let primaryKey = (isNil(model.primaryKey) ? 'id':model.primaryKey)
    let method = data[primaryKey] ? (isNil(api.methodPatch) ? "PUT":api.methodPatch) : (isNil(api.methodPost) ? "POST":api.methodPost);
    let query = interpolate( 
      queryString(api.params, (api.rootApi.includes('?') ? '&':'?')),  
      { ...data, data: resource }
    )
    let sessionConfig = {
      session: model.auth
    }
  
    if( has(data, primaryKey) && !isNil(data[primaryKey]) )
      url = `${api.rootApi}${ isNil(api.urlPatch) ? '/{id}':api.urlPatch }`
    else
      url = `${api.rootApi}${ isNil(api.urlPost) ? '': api.urlPost}`

    console.log("saveData interpolate date", url, {...data, query}, api.resource)
    url = interpolate(url, {...data, query, data: resource})

    let options = {
      method,
      data,
      ...config
    }
    if( api.headers )
      options['headers'] = api.headers
    
    return $axios(url, options, sessionConfig)
  }

  const deleteData = async (data, config={}) => {
    let { api={} } = model;
    if( api?.resource && isEmpty(data.data) ) data.data = api.resource
    
    let primaryKey = (model?.primaryKey || 'id')

    if( !has(data, primaryKey) ) return Promise.reject('Id not found')

    let sessionConfig = {
      session: model?.auth
    }
    
    let method = ( isNil(api.methodDelete) ? "DELETE":api.methodDelete )
    let query = interpolate( 
      queryString(api.params, (api.rootApi.includes('?') ? '&':'?')),  
      data
    )
    let url = `${api.rootApi}${ isNil(api.urlDelete) ? '/{id}':api.urlDelete }`
      
    url = interpolate(url, {...data, query})

    let options = {
      method,
      ...config
    }
    if( api.headers )
      options['headers'] = api.headers
    
    return $axios(url, options, sessionConfig)
  }

  // Fitlers
  const getSchemaSort = () => {
    return schema.reduce( (pv, i) => {
      if( _.has(i, 'config.sorter') && typeof i.config.sorter == 'string' ){ 
        pv = { prop:i.name, order:i.config.sorter }
      }
      return pv
    }, ({}))
  }

  const paginate = ({ local = false, perPage = 5, page = 1 }) => { 
    console.debug('paginate', rows.length, ((perPage * page) - perPage), (perPage * page))
    if( !local ) return rows
    return  [...rows].slice( ((perPage * page) - perPage), (perPage * page))
  }

  const sorting = ({ local, col, order }) => {
    if( !local ) return rows
    return _.orderBy(rows, col. order)
  }

  const filterLocal = (filters = []) => { 
    return rows.filter(
      (row) => {
        return filters.some(i => String(row[i.prop]).includes(String(i.value)) )
      }
    )
  }

  const sortLocal = (filters) => { 
    console.debug('sortLocal', filters)
    if( !filters || !filters.prop ) return rows

    let sorted = _.sortBy(rows, [filters.prop])
    sorter = filters.prop
    if( filters.order === 'descending' ) sorted.reverse()
    return sorted
  }

  // AUTH
  const getSession = () => {
    return session
  }

  const authenticate = ({username, secret, remember}) => {
    try{  
      console.debug('store login') 

      if( !has(config, 'auth.url_login') ) 
        throw new Error('url login doest exist');

      return $axios({
              url: get(config, 'auth.url_login'),
              method: get(config, 'auth.url_method', 'post'),
              data: {
                [get(config, 'auth.field_username', 'email')]: username,
                [get(config, 'auth.field_secret', 'password')]: secret,
                [get(config, 'auth.field_remember', 'remember')]: remember,
              },
              headers: get(config, 'api.headers', {})
              //{
                //[get(cfg, 'request_token', 'access-token')]: ''
              //}
            }, { wrap: false } )
      .then((res) => {
          let token = setToken(res)
          let reqAuthData = authRequest(token)
          let user = setUser(res.data)

          session = { request: reqAuthData, logged: true, token, user }
          return { token, request: reqAuthData, user, logged: true  }
      })
    }catch(e){ 
      console.error('Resource > authenticate error', e)
      return Promise.reject(e)
    }
  }

  const checkAuth = () => {
    try{   
      let cfg = _.get(config, 'auth', {})
      let token = getToken() 
      //Check active session
      if( !token )
        return Promise.reject({message: 'Token not exits'})

      if( _.get(session,'logged') )
        return Promise.resolve(session)

      if( !_.has(cfg, 'logged_url') ){
        return Promise.reject({message: 'Logged url not found'})
      }
      
      let reqAuthData = authRequest(token)
      
      let options = { 
        url: _.get(cfg, 'logged_url'), 
        method: _.get(cfg, 'logged_method', 'get'), 
        ...reqAuthData  
      }

      return $axios(options).then((data) => {
          let user = setUser(data)
          
          session = { user, request: reqAuthData, logged: true, token }
          return { token, user, request: reqAuthData, logged: true }
      })
    }catch(e){
      logout()
      console.error('Resource > checkAuth error', e)
      return Promise.reject({message: e.message})
    }
  }

  const getToken = () => { 
    return sessionStorage.getItem(`${config.domain}_session`)
  }

  const removeToken = () => { 
    return sessionStorage.removeItem(`${config.domain}_session`)
  }

  const setToken = ({data, headers}) => {
    let token = null 

    let cfg = _.get(config, 'auth', {})
    if( _.get(cfg, 'response_mode', 'body') === 'header' ){
      token = headers[ _.get(cfg, 'response_token', 'access-token') ];
    }else{
      token = _.get(data, _.get(cfg, 'response_token', 'access_token'), null)
    } 

    if( !token ) {
      return new Error ({message: 'token not found', config: cfg, data, headers})
    }

    sessionStorage.setItem(`${config.domain}_session`, token)
    return token
  }

  const authRequest = (token) => { 
    let cfg = _.get(config, 'auth', {})

    let tokenRequest = get(cfg, 'request_token_expression', '{token}')
    if( _.get(cfg, 'request_mode', 'header') == 'query' )
      return { 
        headers: _.get(config, 'api.headers', {}),
        params:{
          [_.get(cfg, 'request_token', 'access-token')] : interpolate(tokenRequest, {token})
        }
      } 
    else 
      return {
        headers:{
          ..._.get(config, 'api.headers', {}),
          [_.get(cfg, 'request_token', 'access-token')] : interpolate(tokenRequest, {token})
        }
      }
  }
  
  const setUser = (data) => { 
    let cfg = _.get(config, 'auth', {})
    if( !_.has(cfg, 'logged_model') ) return {};

    let { id, name, username, role } = _.get(cfg, 'logged_model')
    let content = _.get(data, _.get(cfg, 'logged_wrap'), data)
    let user = {
      "id": _.get(content, id, "id"),
      "name": _.get(content, name, "name"),
      "username": _.get(content, username, "email"),
      "role": _.get(content, role, "level")
    }

    return user;
  }

  const logout = async (ctx) => {
    let cfg = _.get(config, 'auth', {})

    let auth = { logged: false }
    let token = getToken()
    console.log("dispatched logout", token)
    if( token ){   
      removeToken()
    }
    session = auth 
    return auth
  }

  return {
    // Schema
    loadModel,
    loadModelByUrl,
    setModel,
    getModel,
    can,
    isIt,
    // Data
    setConfig,
    getData,
    setData,
    getDataObject,
    saveData,
    deleteData,
    paginate,
    sorting,
    getSchemaSort,
    // Auth
    getSession,
    getToken,
    setToken,
    authenticate,
    checkAuth,
    logout,
  }
}