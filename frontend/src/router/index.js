import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../components/signup.vue';
import Login from '../components/login.vue';
import Forum from '../components/forum.vue';
import Message from '../components/message.vue';
import Post from '../components/post.vue';

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home
  },
  //{
  //  path : '/about',
  //  name : 'About',
  //  // route level code-splitting
  //  // this generates a separate chunk (about.[hash].js) for this route
  //  // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //},
  {
    path : '/signup',
    name : 'signup',
    component : Signup
  },
  {
    path : '/login',
    name : 'login',
    component : Login
  },
  {
    path : '/forum',
    name : 'forum',
    component : Forum
  },
  {
    path : '/message',
    name : 'message',
    component : Message
  },
  {
    path : '/post',
    name : 'post',
    component : Post
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
