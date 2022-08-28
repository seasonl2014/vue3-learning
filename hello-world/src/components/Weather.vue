<template>
<div>

</div>
</template>

<script>
export default {
  data() {
    return {
      city: '北海'
    }
  },
  mounted() {
    // 统一配置前缀、超时时间和自定义的header
    const instance = this.axios.create({
      baseURL: '/myApi',
      thimeout: 1000,
      headers: {'X-Custom-Header':'custom'}
    })
    this.axios.defaults.baseURL = '/myApi'
    let city = encodeURI(this.city)
    let api = `/simpleWeather/query?city=${city}&key=cffe158caf3fe63aa2959767a503bbfe`

    this.axios.interceptors.request.use((config)=>{
      alert("请求将要开始")
      return config
    },(error)=>{
      alert("请求出现错误")
      return Promise.reject(error)
    })

    instance.get(api).then((response)=> {
       console.log(response)
    })

    this.axios({
      method: 'get',
      url: "/myApi"+api
    }).then((response)=> {
      console.log(response)
    })

    this.axios.interceptors.response.use((response)=>{
      alert(response.status)
      return response
    },(error)=>{
      return Promise.reject(error)
    })

  }
}
</script>

<style scoped>

</style>
