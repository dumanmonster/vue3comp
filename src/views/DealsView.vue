<script setup lang="ts">
import { useStore } from '@/stores/main'
import ProductCard from '@/components/ProductCard.vue'
import { computed, onMounted } from 'vue'
const store = useStore()
onMounted(() => {
  store.fetchItems();
})
const searchedItems = computed(() => store.searchedItems)
const dealItems = computed(() => store.filteredDeals)

</script>
<template>
  <div v-if="store.searchQuery.length == 0"  class="card-container">
    <ProductCard v-for="item in dealItems" :product="item" :key="item.name" />
  </div>
  <div v-else class="card-container">
    <ProductCard v-for="item in searchedItems" :product="item" :key="item.name" />
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
}
</style>
