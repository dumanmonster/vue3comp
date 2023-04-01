<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useStore } from './stores/main';
import { ref } from 'vue';


const store = useStore()

const handlePageChange = (newPage: 'Fav' | 'Stock' | 'Deals') => {
  store.changePage(newPage)
}
const changeFilter = (newFilter: string) =>{
  store.setFilter(newFilter);
}
</script>

<template>
  <div class="header">
    <div class="header__block"></div>
    <div class="header__nav">
      <RouterLink
        :class="['header__nav-item', store.page === 'Fav' && 'header__nav-item--active']"
        to="/favorites"
        @click="handlePageChange('Fav')"
      >
        <img src="./assets/icons/favorites.svg" alt="Favorites" />
        <span class="header__nav-item-text">Избранное</span>
      </RouterLink>
      <RouterLink
        :class="['header__nav-item', store.page === 'Stock' && 'header__nav-item--active']"
        to="/stock"
        @click="handlePageChange('Stock')"
      >
        <img src="./assets/icons/stock.svg" alt="Stock" />
        <span class="header__nav-item-text">Склад</span>
      </RouterLink>
      <RouterLink
        :class="['header__nav-item', store.page === 'Deals' && 'header__nav-item--active']"
        to="/deals"
        @click="handlePageChange('Deals')"
      >
        <img src="./assets/icons/deals.svg" alt="Deals" />
        <span class="header__nav-item-text">Сделки</span>
      </RouterLink>
    </div>
  </div>
  <div class="view-header">
    <div class="view-header__options">
      <p :class="['view-header__options-text', store.filter == 'all' && 'view-header__options-text--active']" @click="changeFilter('all')">Все типы</p>
      <p :class="['view-header__options-text', store.filter == 'direct' && 'view-header__options-text--active']" @click="changeFilter('direct')">Прямые продажи</p>
      <p :class="['view-header__options-text', store.filter == 'auction' && 'view-header__options-text--active']" @click="changeFilter('auction')">Аукцион</p>
    </div>
    <div class="view-header__search">
      <input class="view-header__search-input" type="text" v-model="store.searchQuery"/>
      <div class="view-header__search-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.91667 2.5C9.35326 2.5 10.731 3.07068 11.7468 4.0865C12.7627 5.10233 13.3333 6.48008 13.3333 7.91667C13.3333 9.25833 12.8417 10.4917 12.0333 11.4417L12.2583 11.6667H12.9167L17.0833 15.8333L15.8333 17.0833L11.6667 12.9167V12.2583L11.4417 12.0333C10.4917 12.8417 9.25833 13.3333 7.91667 13.3333C6.48008 13.3333 5.10233 12.7627 4.0865 11.7468C3.07068 10.731 2.5 9.35326 2.5 7.91667C2.5 6.48008 3.07068 5.10233 4.0865 4.0865C5.10233 3.07068 6.48008 2.5 7.91667 2.5ZM7.91667 4.16667C5.83333 4.16667 4.16667 5.83333 4.16667 7.91667C4.16667 10 5.83333 11.6667 7.91667 11.6667C10 11.6667 11.6667 10 11.6667 7.91667C11.6667 5.83333 10 4.16667 7.91667 4.16667Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';
.header {
  display: flex;
  gap: 20px;
  flex-direction: column;
  &__block {
    background-color: $border;
    height: 40px;
    border-radius: 0px 0px 10px 10px;
  }
  &__nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    &-item {
      position: static;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 50px;
      width: 86px;
      gap: 5px;
      border-radius: 10px;
      padding: 6px 0px 7px 0px;
      text-decoration: none;
      &-text {
        font-size: 13px;
        font-weight: 500;
        color: $primary-text;
      }
      &:hover {
        background-color: $primary-background;
      }
      &--active {
        background-color: $primary-background;
      }
    }
  }
}
.view-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  &__options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 304px;
    height: 40px;
    background: $primary-background;
    border: 1px solid $border;
    border-radius: 10px;
    margin-right: auto;
    &-text {
      margin: 0;
      font-size: 15px;
      color: $secondary-text;
      cursor: pointer;
      &--active {
        color: $primary-text;
      }
    }
  }

  &__search {
    position: relative;
    &-input {
      width: 274px;
      height: 48px;
      border: 1px solid #e0e3ee;
      border-radius: 10px;
      color: $primary-text;
      font-weight: 500;
      padding-left: 20px;
      &:focus-visible {
        outline: none;
      }
    }
    &-icon {
      position: absolute;
      top: 50%;
      right: 4px;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 40px;
      height: 40px;
      background-color: $primary-text;
      border-radius: 10px;
    }
  }
}
</style>
