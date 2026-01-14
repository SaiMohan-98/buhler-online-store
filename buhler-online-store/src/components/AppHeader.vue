<template>
  <header class="header">
    <div class="logo" @click="goHome">
      Bühler
    </div>

    <div class="time">
      {{ currentTime }}
    </div>

    <div class="cart" @click="goToCheckout">
      🛒 Cart ({{ cartStore.totalCount }})
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()


const router = useRouter();
const currentTime = ref('');

let timer: number;

const updateTime = () => {
  currentTime.value = new Date().toLocaleString();
};

onMounted(() => {
  updateTime();
  timer = window.setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

const goHome = () => {
  router.push('/products');
};

const goToCheckout = () => {
  router.push('/checkout');
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-weight: bold;
  cursor: pointer;
}

.cart {
  cursor: pointer;
}
</style>
