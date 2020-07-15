<script>
//import axios from 'axios'
//import HelloWorld from './components/HelloWorld.vue'
import jsonp from 'jsonp'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // },
  data(){
    return {
      age:30,
      data:''
    }
  },
  mounted(){
    //let url="https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list"    
    // axios.get(url).then(()=>{
    // })
    let url="/api/activity/servicetime"
    jsonp(url,(err,res)=>{
      let result = res;
      this.data = result;
    })
  }
}
</script>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
