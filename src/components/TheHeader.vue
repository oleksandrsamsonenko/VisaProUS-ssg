<script setup>
import { ref, onMounted } from 'vue'

import LanguageSelector from './LanguageSelect/LanguageSelector.vue'
import TheModal from './TheModal.vue'
import HeroModal from './ModalContent/HeroModal.vue'
import MenuIcon from './icons/MenuIcon.vue'

const isModalOpen = ref(false)

const toggleModal = (value) => {
  isModalOpen.value = value
}

const isPageAtTop = ref(false)

let header = document.getElementById('header')

document.addEventListener('scroll', () => {
  let scrollPos = window.scrollY

  if (scrollPos > 100) {
    isPageAtTop.value = true
  } else {
    isPageAtTop.value = false
  }
})

onMounted(() => {})
</script>

<template>
  <header class="header" :class="{ visible: isPageAtTop }">
    <div class="wrapper">
      <img src="/Logotype.png" alt="Logo" class="logo" />
      <nav class="navigation">
        <a href="tel:+12063591332" class="link">LET'S TALK</a>
        <LanguageSelector />
      </nav>
      <button class="menu" @click="toggleModal(true)"><MenuIcon class="icon" /></button>
    </div>
    <teleport to="#modal">
      <TheModal :isOpen="isModalOpen" @close="toggleModal">
        <HeroModal @close="toggleModal" />
      </TheModal>
    </teleport>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100vw;
  position: fixed;
  z-index: 5;
  background-color: transparent;
  padding: 12px 20px;
  transition: all 350ms ease;
  @media (min-width: 768px) {
    background-color: #ffffff;
    padding: 10px 40px;
  }
  @media (min-width: 1440px) {
    max-width: 1680px;
    padding: 20px 140px;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: auto 1fr auto;
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 40px;
  }
}

.logo {
  width: 47px;
  height: 35px;
  @media (min-width: 1440px) {
    width: 80px;
    height: 60px;
  }
}

.navigation {
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-self: end;
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 54px;
  }
}

.menu {
  display: grid;
  place-items: center;
  border: none;
  border-radius: 50%;

  .icon {
    color: #073826;
    fill: #ffffff;
    transition: all 350ms ease;
    width: 41px;
    height: 41px;
    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
      color: #ffffff;
      fill: #073826;
    }
    @media (min-width: 1440px) {
      height: 60px;
      width: 60px;
    }
  }
  &:hover {
    @media (min-width: 1440px) {
      .icon {
        color: #ffffff;
        fill: #0e5e40;
      }
    }
  }
  &:active {
    .icon {
      color: #ffffff;
      fill: #073826;
    }
  }
}

.link {
  font-size: 9px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.03em;
  text-decoration: underline;
  color: #22282b;
  border: none;
  min-width: 25px;
  background-color: transparent;

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 19px;
  }

  &:hover {
    color: #0e5e40;
  }

  &:active {
    color: #073826;
  }
}

.visible {
  border-bottom: 1px solid #e6e9ea;

  @media (max-width: 767px) {
    background-color: #e6e9ea;
  }
}
</style>
