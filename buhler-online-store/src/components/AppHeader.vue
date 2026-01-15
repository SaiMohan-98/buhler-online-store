<template>
  <header class="header">
    <div class="logo" @click="goHome">
      <img  width="150" height="30" alt="Buhler Logo" class="image" loading="lazy" fetchpriority="auto" src="/docs/Buhler-logo.svg">
    </div>

    <div class="time">
      {{ currentTime }}
    </div>

    <div class="cart" @click="goToCheckout">
    <div class="cart-icon">
       <svg _ngcontent-ng-c3430891896="" fill="currentColor" id="Cart" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 902.86 902.86" xml:space="preserve"><g _ngcontent-ng-c3430891896=""><g _ngcontent-ng-c3430891896=""><path _ngcontent-ng-c3430891896="" d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
               M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path><path _ngcontent-ng-c3430891896="" d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
              c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
              c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
              C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
              c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
               M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
              S619.162,694.432,619.162,716.897z"></path></g></g>
        </svg>
    </div>
      Cart ({{ cartStore.totalCount }})
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

<style>
.header {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    border-bottom: 1px solid #009b91;
    gap: 8px;
    height: 50px;
}

.logo {
  font-weight: bold;
  cursor: pointer;
}

.cart {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #009b91;
  cursor: pointer;
  text-decoration: none;
}

.cart-icon {
  width: 20px;
  height: 20px;
}
body {
  margin: 0;
  font-family: Roboto, Helvetica Neue, sans-serif;
  color: #009b91;
}
</style>
