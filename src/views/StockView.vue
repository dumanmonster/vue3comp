<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { useStore } from '@/stores/main'
import { computed, onMounted} from 'vue'
const filteredItems = computed(() => store.filteredItems)


const store = useStore()
onMounted(() => {
  store.fetchItems();
})

</script>
<template>
  <div class="card-container">
    <ProductCard v-for="item in filteredItems" :product="item" :key="item.name" />
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
