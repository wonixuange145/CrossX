import HomeVue from "../components/home/Home.vue";
import LoginVue from "../components/login/Login.vue";
import UserVue from "../components/user/User.vue";
import MainVue from "../views/Main.vue";
// import CommonHeaderVue from "../components/public/CommonHeader.vue";
// import CommonAsideVue from "../components/public/CommonAside.vue";
import Vue from 'vue'
export default {
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/login'
    },
    // {
    //   path: '/home',
    //   name: '主页',
    //   left: true,
    //   component: HomeVue,
    //   children: []
    // },
    {
      path: '/login',
      name: '登录',
      component: LoginVue,
    },
    // {
    //   path: '/main',
    //   name: '主页2',
    //   component: MainVue,
    // },
    {
      path: '/main',
      component: () => import('@/views/Main'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/components/home/Home'),
        },
        {
          path: 'page1',
          name: 'page1',
          component: () => import('@/views/Other/PageOne'),
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('@/views/Other/PageTwo'),
        },
      ]
    }
    // {
    //   path: '/header',
    //   component: CommonHeaderVue,
    // },
    // {
    //   path: '/aside',
    //   component: CommonAsideVue,
    // },
  ]
}
