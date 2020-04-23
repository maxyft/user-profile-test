import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UserProfile from 'views/user-profile/user-profile.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: UserProfile
  },
]

export default new VueRouter({ routes })
