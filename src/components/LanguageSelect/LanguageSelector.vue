<script setup>
import { ref } from 'vue'
import { Collapse } from 'vue-collapsed'

const languages = ['EN', 'RU', 'ES']

const currentLanguage = ref(0)
const dropdownStatus = ref(false)

const toggleDropdown = (value) => {
  if (!value) {
    dropdownStatus.value = !dropdownStatus.value
    return
  }
  dropdownStatus.value = false
}

const setLanguage = (index) => {
  currentLanguage.value = index
  toggleDropdown()
}
</script>

<template>
  <div class="languages">
    <button class="button" @click="toggleDropdown(null)">
      {{ languages[currentLanguage] }}
    </button>
    <transition name="backdrop">
      <div v-if="dropdownStatus" class="backdrop" @click="toggleDropdown(true)"></div>
    </transition>
    <Collapse :when="dropdownStatus" class="dropdown">
      <div class="triangle"></div>
      <ul class="list">
        <li class="item" v-for="(item, index) in languages" :key="item">
          <button
            class="select"
            @click="setLanguage(index)"
            :class="{ current: index === currentLanguage }"
          >
            {{ item }}
          </button>
        </li>
      </ul>
    </Collapse>
  </div>
</template>

<style scoped lang="scss">
.languages {
  position: relative;
  display: grid;
  place-items: center;
}

.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #909da275;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 1;
}
.backdrop-enter-active,
.backdrop-leave-active {
  transition: all 350ms ease;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 25;
  transition: all 400ms ease;

  .current {
    color: #22282b;
    text-decoration: underline;
  }
}

.triangle {
  margin: 0 auto;
  width: 20%;
  height: 11px;
  background-image: linear-gradient(to bottom right, transparent 50%, #ffffff 0),
    linear-gradient(to top right, #ffffff 50%, transparent 0);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: left, right;
}
.list {
  padding: 5px;
  background-color: #ffffff;
}

.item:not(:last-child) {
  border-bottom: 1px solid #eaeaea;
}
.select {
  border: none;
  background-color: transparent;
  font-size: 12px;
  line-height: 17px;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #e6e9ea;
  padding: 6px 6px;

  &:hover {
    color: #0e5e40;
  }

  &:active {
    color: #073826;
  }

  @media (min-width: 768px) {
    font-size: 9px;
    line-height: 1.2;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 19.2px;
    padding: 6px 20px;
  }
}

.button {
  text-decoration: underline;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: -0.03em;
  color: #22282b;
  border: none;
  min-width: 25px;
  background-color: transparent;
  @media (min-width: 768px) {
    font-size: 9px;
    font-weight: 600;
    line-height: 1.2;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 19px;
  }

  &:hover {
    @media (min-width: 1440px) {
      color: #0e5e40;
    }
  }

  &:active {
    color: #073826;
  }
}
</style>
