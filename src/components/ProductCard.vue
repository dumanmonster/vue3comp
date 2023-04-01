<script lang="ts" setup>
import type { Product } from '@/models/main'
import LikeButton from './Buttons/LikeButton.vue'
import { useStore } from '@/stores/main'
import DealButton from './Buttons/DealButton.vue';

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  }
})
const total = props.product.quantity * props.product.pricePerOne


</script>
<template>
  <div class="container">
    <div class="container__info">
      <img class="container__info-img" src="../assets/Image.png" alt="Image" />
      <div class="container__info-wrapper">
        <p class="container__info-wrapper-sell-type">{{ product.typeOfSell }}</p>
        <p class="container__info-wrapper-name">{{ product.name }}</p>
        <div class="container__info-wrapper-address">
          <img src="../assets/icons/geo.svg" alt="Geo" />
          <p class="container__info-wrapper-address-text">{{ product.address }}</p>
        </div>
        <div class="container__info-wrapper-seller">
          <p class="container__info-wrapper-seller-initial">Продавец</p>
          <p class="container__info-wrapper-seller-text">{{ product.seller }}</p>
        </div>
        <div class="container__info-wrapper-type">
          <p class="container__info-wrapper-type-initial">Вид товара</p>
          <p class="container__info-wrapper-type-text">{{ product.typeOfProduct }}</p>
        </div>
        <p class="container__info-wrapper-desc">
          {{ product.description }}
        </p>
      </div>
    </div>
    <div class="container__action">
      <h4 class="container__action-total">{{ total }} ₽</h4>
      <div class="container__action-quantity">
        <p class="container__action-quantity-initial">Количество</p>
        <p class="container__action-quantity-text">{{ product.quantity }} шт.</p>
      </div>
      <div class="container__action-price-per-one">
        <p class="container__action-price-per-one-initial">Стоимость за штуку</p>
        <p class="container__action-price-per-one-text">{{ product.pricePerOne }} ₽</p>
      </div>
      <div class="container__action-buttons">
        <DealButton :item="product" />
        <LikeButton :item="product" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';
.container {
  display: flex;
  margin: 0 17px;
  width: 100%;
  height: 366px;
  border: 1px solid $border;
  border-radius: 20px;
  &__info {
    display: flex;
    width: 73%;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
      &-sell-type {
        font-size: 13px;
        color: $secondary-text;
        font-weight: 400;
      }
      &-name {
        font-size: 15px;
        font-weight: 500;
        line-height: 125%;
        padding-bottom: 20px;
      }
      &-address {
        display: flex;
        gap: 4px;
        align-items: center;
        padding: 4px 8px;
        height: 23px;
        border-radius: 5px;
        background: $primary-background;
        &-text {
          font-size: 13px;
          color: #616ca5;
        }
      }
      &-seller {
        display: flex;
        gap: 4px;
        &-initial {
          font-size: 13px;
          color: $secondary-text;
        }
        &-text {
          font-size: 13px;
        }
      }
      &-type {
        display: flex;
        flex-direction: column;
        width: 124px;
        height: 48px;
        justify-content: center;
        align-items: flex-start;
        padding: 8px;
        gap: 6px;
        background: $primary-background;
        border-radius: 10px;
        &-initial {
          color: $secondary-text;
          font-size: 13px;
        }
        &-text {
          color: #616ca5;
          font-size: 13px;
        }
      }
      &-desc {
        font-size: 13px;
        line-height: 20px;
        max-height: 64px;
        max-width: 400px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
  &__action {
    display: flex;
    flex-direction: column;
    width: 314px;
    border-left: 1px solid $border;
    border-radius: 20px;
    align-items: flex-start;
    padding: 20px;
    gap: 12px;
    &-total {
      font-size: 20px;
      font-weight: 500;
      padding-bottom: 1.5px;
    }
    &-quantity {
      display: flex;
      width: 100%;
      justify-content: space-between;
      &-initial {
        color: $secondary-text;
        font-size: 13px;
      }
      &-text {
        font-size: 13px;
      }
    }
    &-price-per-one {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: auto;
      &-initial {
        color: $secondary-text;
        font-size: 13px;
      }
      &-text {
        font-size: 13px;
      }
    }
    &-buttons {
      display: flex;
      gap: 12px;
    }
  }
}
</style>
