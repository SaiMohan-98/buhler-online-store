<template>
  <div class="checkout">
    <h1>Checkout</h1>

    <div v-for="item in cartStore.items" :key="item.id" class="row">
      <img :src="item.imageUrl" />
      <div class="info">
        <h3>{{ item.name }}</h3>
        <p>{{ item.category }}</p>
      </div>

      <span>x{{ item.price.toFixed(2) }}</span>

      <button @click="remove(item.id)">✕</button>
    </div>

    <div class="total">
      Total: x{{ cartStore.totalPrice.toFixed(2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()

function remove(id: string) {
  cartStore.removeFromCart(id)
}
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
img {
  width: 80px;
}
.total {
  text-align: right;
  font-weight: bold;
}
</style>
