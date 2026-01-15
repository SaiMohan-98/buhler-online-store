<template>
  <div class="checkout">
    <h1 class="CheckOutHeading">Checkout</h1>

    <div v-for="item in cartStore.items" :key="item.id" class="row">
    <div class="info-container">
      <img :src="item.imageUrl" width="100" height="100"/>
        <div class="info">
          <h3>{{ item.name }}</h3>
          <p>{{ CATEGORY_LABELS[item.category] }}</p>
        </div>
    </div>
    <div class="end-container">
     
      <span>x{{ item.price.toFixed(2) }}</span>

      <button @click="remove(item.id)" class="cartRemove">
        <svg _ngcontent-ng-c3544986833="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30"><path _ngcontent-ng-c3544986833="" fill="currentColor" d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg>
      </button>
    </div>
    </div>

    <div class="total">
      Total: x{{ cartStore.totalPrice.toFixed(2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
import { CATEGORY_LABELS } from '@/constants/category'

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

.total {
  text-align: right;
  font-weight: bold;
}
.checkout {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.info-container {
  display: flex;
  align-items: center;
  gap: 20px;
}
.CheckOutHeading {
  margin: 0;
}

.end-container {
    display: flex;
    gap: 40px
}

.cartRemove {
      background: none;
    border: oldlace;
    color: inherit;
}
</style>
