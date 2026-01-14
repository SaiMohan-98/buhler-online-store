import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/products',
    component: () => import('../pages/ProductList.vue'),
  },
  {
    path: '/products/:id',
    component: () => import('../pages/ProductDetails.vue'),
  },
  {
    path: '/checkout',
    component: () => import('../pages/Checkout.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
