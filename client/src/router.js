import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/classification',
      name: 'classification',
      component: () => import(/* webpackChunkName: "classification" */ './views/Classification.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './views/Post.vue')
    },
    {
      path: '/editPost',
      name: 'editPost',
      component: () => import(/* webpackChunkName: "editpost" */ './views/EditPost.vue'),
      beforeEnter (to, from, next) {
        if (to.name === 'editPost') {
          axios.post('http://localhost:3000/isLogin')
            .then((res) => {
              if (res.data.status === 1) {
                next()
              } else {
                next('/')
              }
            })
            .catch((err) => {
              console.log(err)
              next('/')
            })
        } else {
          next()
        }
      }
    }
  ]
})
