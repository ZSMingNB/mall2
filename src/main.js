import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
//import env from './env'  //不加./认为是插件会报错

//定义一个mock开关
const mock = false;
if(mock){
  require('./mock/api');
}

//根据前端的跨域方式做调整
//axios.defaults.baseURL = 'http://www.baidu.com'; //后端与前端域名不一样的时候
//后端与前端域名一样的，可以这样写（不一定调用api），后台的接口也叫api或前端用跨域方法解决
//比如要访问的是/a/b   实现：/api/a/b => /a/b(实际访问)  [使用方法为接口代理]
axios.defaults.baseURL = '/api'; 
//超时时间
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  //这个才是接口取到的值
  let res = response.data;
  //获取链接路径
  let path = location.hash;
  //=0为成功
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){  //=10为未登录
    if (path != '#/index'){
      window.location.href = '/#/login';
    }
     
  }else{      //错误信息
    alert(res.msg);
    return Promise.reject(res);
  }
})

//注册
Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
