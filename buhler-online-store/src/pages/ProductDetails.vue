<template>
  <div v-if="product">
    <img :src="product.imageUrl" />
    <h2>{{ product.name }}</h2>
    <p>€ {{ product.price }}</p>

    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import productsData from '@/data/products.json'
import { useCartStore } from '@/store/cart'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const product = computed(() =>
  (productsData as any[]).find(p => p.id === route.params.id)
)

function addToCart() {
  if (product.value) {
    cartStore.addToCart(product.value)
    router.push('/checkout')
  }
}

</script>
