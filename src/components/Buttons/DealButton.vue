<script setup lang="ts">
import type { Product } from '@/models/main'
import { useStore } from '@/stores/main.js'
const store = useStore()
const props = defineProps({
  item: {
    type: Object as () => Product,
    required: true
  }
})

const toggleDeal = (item: Product) => {
  store.toggleDeal(item)
}
</script>
<template>
  <div class="deal-button" @click="toggleDeal(item)">Добавить в сделки</div>
</template>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';
.deal-button {
  text-align: center;
  cursor: pointer;
  width: 212px;
  height: 50px;
  padding: 15px 25px;
  background: $primary-background;
  border-radius: 10px;
  border: none;
  color: $primary-text;
  font-size: 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
}
</style>
