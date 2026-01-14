<template>
  <div class="product-list">
    <section
      v-for="(products, category) in groupedProducts"
      :key="category"
      class="category-section"
    >
      <h2 class="category-title">
        {{ categoryLabels[category] }}
      </h2>

      <div class="grid">
        <div
          v-for="product in products"
          :key="product.id"
          class="card"
          @click="goToDetails(product.id)"
        >
          <img
            :src="product.imageUrl"
            :alt="product.name"
            class="product-image"
          />

          <div class="card-footer">
            <h3 class="product-name">{{ product.name }}</h3>

            <div class="price-cart">
              <span class="price">x{{ product.price.toFixed(2) }}</span>

              <!-- stop prevents navigation when clicking cart -->
              <button
                class="add-cart"
                @click.stop="addToCart(product)"
                aria-label="Add to cart"
              >
                🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import productsData from '@/data/products.json'
import { useCartStore } from '@/store/cart'

/* -------------------- Types -------------------- */
interface Product {
  id: string
  name: string
  category: string
  price: number
  imageUrl: string
}

/* -------------------- Category Labels -------------------- */
const categoryLabels: Record<string, string> = {
  machine_roller: 'Rollers',
  machine_sorter: 'Optical Sorters',
  machine_dryer: 'Dryers',
  machine_die_casting: 'Die Casting Machines',
}

/* -------------------- Stores & Router -------------------- */
const router = useRouter()
const cartStore = useCartStore()

/* -------------------- Group Products -------------------- */
const groupedProducts = computed(() => {
  return (productsData as Product[]).reduce(
    (groups: Record<string, Product[]>, product) => {
      if (!groups[product.category]) {
        groups[product.category] = []
      }
      groups[product.category].push(product)
      return groups
    },
    {}
  )
})

/* -------------------- Actions -------------------- */
function goToDetails(id: string) {
  router.push(`/products/${id}`)
}

function addToCart(product: Product) {
  cartStore.addToCart(product)
}
</script>

<style scoped>
.category-section {
  margin-bottom: 32px;
}

.category-title {
  margin: 24px 0 12px;
  color: #007c6d;
  font-size: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.card {
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 160px;
  object-fit: contain;
  padding: 8px;
}

.card-footer {
  background: #eee;
  padding: 8px;
}

.product-name {
  font-size: 14px;
  margin-bottom: 6px;
}

.price-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: bold;
}

.add-cart {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>
