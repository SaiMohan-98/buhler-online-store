<template>
  <div class="product-list">
    <section
      v-for="(products, category) in groupedProducts"
      :key="category"
      class="category-section">
      <h2 class="category-title">
        {{ CATEGORY_LABELS[category] }}
      </h2>

      <div class="products">
        <div
          v-for="product in products"
          :key="product.id"
          class="card"
          @click="goToDetails(product.id)">
          <div class="image-container">
            <img
              :src="product.imageUrl"
              :alt="product.name"
              class="product-image"/>
          </div>

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
                <svg _ngcontent-ng-c34010421="" fill="currentColor" id="Cart" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 902.86 902.86" xml:space="preserve"><g _ngcontent-ng-c34010421=""><g _ngcontent-ng-c34010421=""><path _ngcontent-ng-c34010421="" d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
               M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path><path _ngcontent-ng-c34010421="" d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
              c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
              c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
              C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
              c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
               M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
              S619.162,694.432,619.162,716.897z"></path></g></g></svg>
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
import { CATEGORY_LABELS } from '@/constants/category'


interface Product {
  id: string
  name: string
  category: string
  price: number
  imageUrl: string
}





const router = useRouter()
const cartStore = useCartStore()


const groupedProducts = computed(() => {
  const groups: Record<string, Product[]> = {}

  for (const product of productsData as Product[]) {
    const category = product.category

    if (!groups[category]) {
      groups[category] = []
    }

    groups[category]!.push(product)
  }

  return groups
})


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

.image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 10px;
    min-width: 0;
    min-height: 0;
}

.category-title {
  margin: 24px 0 12px;
  color: #007c6d;
  font-size: 20px;
}

.products {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
}

.card {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 200px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  border: 2px solid #dadada;
  cursor: pointer;
}

.card:hover {
  border-color: #009b91;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding: 5px 20px;
  gap: 10px;
  color: #009b91;
  background-color: #dadada;
  font-size: 12px;
}

.product-name {
  font-size: 12px;
  margin: 0px;
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
  width: 20px;
  height: 20px;
  padding: 0;
  color: #009b91;
}
</style>
