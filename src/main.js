// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

// 打开 main.js
import Bmob from "hydrogen-js-sdk"

// 初始化
Bmob.initialize("f74b57bd81b6149f035360d4afa837e2", "f0d8951c81c71b4f539784296a36d610")

// 挂载到全局使用
Vue.prototype.Bmob = Bmob


Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false


//自定义指令


//改变标题颜色
// Vue.directive('rainbow',{      
//   bind:function(el, binding,vnode){
//     el.style.color = '#' + Math.random().toString(16).slice(2,8);
//     //console.log('#' + Math.random().toString(16).slice(2,8))
//   }
// })

//使容器改变
Vue.directive('theme',{
  bind:function(el, binding,vnode){
    if (binding.value == "wide"){
      el.style.maxWidth = "1200px";
    }else if (binding.value == "naroow"){
      el.style.maxWidth = "560px";
    }

    if(binding.arg == "column"){
      el.style.background = "#6677cc";
      el.style.padding = "20px";
    }
    
  }
})

//自定义过滤器

//使标题全部大写
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase(); 
// })

//截取内容
// Vue.filter('snippet', function (value) {
//   return value.slice(0,100) + "..."; 
// })


//创建路由
const router = new VueRouter({
  routes: Routes,
  mode:'history'
})


/* eslint-disable no-new */
new Vue({

  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
