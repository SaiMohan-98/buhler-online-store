import { createRouter, createWebHashHistory } from 'vue-router'


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
  history: createWebHashHistory(),
  routes,
});

export default router;
