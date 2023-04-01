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

const toggleDeal = () => {
  store.addDeal(props.item)
}

const payDeal = () => {
  store.payDeal(props.item)
}
</script>
<template>
  <div v-if="!item.dealId" class="deal-button" @click="toggleDeal">Добавить в сделки</div>
  <div v-else :class="['pay-button', item.isPayed && 'pay-button--payed']" @click="payDeal">
    {{ !item.isPayed ? 'Оплатить' : 'Оплачено' }}
  </div>
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
.pay-button {
  text-align: center;
  cursor: pointer;
  width: 212px;
  height: 50px;
  padding: 15px 25px;
  background: #69c57f;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  &--payed {
    color: #969dc3;
    background: #ffffff;
    border: 1px solid #e0e3ee;
  }
}
</style>
