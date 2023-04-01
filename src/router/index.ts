import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/stock' },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/stock',
      name: 'stock',
      component: () => import('../views/StockView.vue')
    },
    {
      path: '/deals',
      name: 'deals',
      component: () => import('../views/DealsView.vue')
    }
  ]
})

export default router
