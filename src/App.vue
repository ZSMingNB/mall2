<script>
//import storage from './storage'
export default {
  name: 'app',
  components: {

  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    //storage.setItem('a',1);
    //storage.setItem('user',{a:1});
    //storage.setItem('abc',{a:1},'user');
    //storage.clear('a');
    //storage.clear('a','user');
    //本地请求加载json的方式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    //本地集成mock.js实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
  }
}
</script>
<template>
  <div id="app">
    <router-view>

    </router-view>
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
