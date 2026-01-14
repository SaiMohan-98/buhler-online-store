import { defineStore } from 'pinia'

export interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string
  category: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price, 0),

    totalCount: (state) => state.items.length,
  },

  actions: {
    addToCart(product: CartItem) {
      this.items.push(product)
    },

    removeFromCart(id: string) {
      this.items = this.items.filter(item => item.id !== id)
    },
  },
})
