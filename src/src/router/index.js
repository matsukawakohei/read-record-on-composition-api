import { createRouter, createWebHistory } from 'vue-router'
import TopHome from '../views/TopHome.vue'
import BookSearch from '../views/BookSearch.vue'
import BookForm from '../views/BookForm.vue'

const routes = [
  {
    path: '/',
    name: 'TopHome',
    component: TopHome
  },
  {
    path: '/search',
    name: 'Search',
    component: BookSearch
  },
  {
    path: '/form',
    name: 'Form',
    component: BookForm
  },
  {
    path: '/:paths(.*)*',
    name: 'Failback',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
