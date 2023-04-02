import type { Product } from '@/models/main'
import { defineStore } from 'pinia'
import axios from 'axios'
import apiClient from '@/api'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    items: [] as Product[],
    filter: 'all',
    searchQuery: '',
    deals: [] as Product[],
    page: 'Stock' || 'Fav' || 'Deals'
  }),
  getters: {
    filteredItems(state) {
      if (state.filter === 'auction') {
        return state.items.filter((item) => item.typeOfSell === 'Аукцион')
      } else if (state.filter === 'direct') {
        return state.items.filter((item) => item.typeOfSell === 'Разовая продажа')
      } else {
        return state.items
      }
    },
    filteredDeals(state) {
      if (state.filter === 'auction') {
        return state.deals.filter((item) => item.typeOfSell === 'Аукцион')
      } else if (state.filter === 'direct') {
        return state.deals.filter((item) => item.typeOfSell === 'Разовая продажа')
      } else {
        return state.deals
      }
    },

    searchedItems(state) {
      return state.searchQuery
        ? state.items.filter((item) =>
            item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
          )
        : state.items
    }
  },
  actions: {
    async fetchItems() {
      const response = (await apiClient.get('/items'))
      const dealsResponse = await apiClient.get('/deals')
      this.items = response.data
      this.deals = dealsResponse.data
    },
    changePage(newPage: 'Stock' | 'Fav' | 'Deals') {
      this.page = newPage
    },
    addItem(item: Product) {
      this.items.push(item)
    },
    removeItem(item: Product) {
      this.items.splice(this.items.indexOf(item), 1)
    },
    toggleFavorite(item: Product) {
      item.favorite = !item.favorite
      apiClient.put('/items', this.items)
    },
    async addDeal(item: Product) {
      await apiClient.post('/deals', item)
    },
    async payDeal(item: Product) {
      item.isPayed = true
      await apiClient.put('/deals', this.deals)
    },
    setFilter(filter: string) {
      this.filter = filter
    },
    setSearchQuery(query: string) {
      this.searchQuery = query
    }
  }
})
