<script setup lang="ts">
import { useStore } from '@/stores/main'
import ProductCard from '@/components/ProductCard.vue'
import { computed } from 'vue'
const store = useStore()

const dealItems = computed(() => store.items.filter((item) => item.deal))
</script>
<template>
  <div class="card-container">
    <ProductCard v-for="item in dealItems" :product="item" :key="item.name" />
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
