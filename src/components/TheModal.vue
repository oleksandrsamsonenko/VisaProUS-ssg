<script setup>
import { watch } from 'vue'
import LanguageSelector from './LanguageSelect/LanguageSelector.vue'
import PlusIconVue from './icons/PlusIcon.vue'
defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>
<!-- v-scroll-lock="isOpen"  -->
<template>
  <transition name="modal">
    <div v-if="isOpen" class="backdrop" @click="emit('close', false)">
      <div class="modal" @click.stop="">
        <div class="header">
          <img src="/Logo.png" alt="Logo" class="logo" />
          <img src="/LogotypeBlack.png" alt="Logo" class="logo-text" />
          <a href="tel:+12063591332" class="link">LET'S TALK</a>
          <LanguageSelector class="selector" />
          <button class="close" @click="emit('close', false)">
            <PlusIconVue class="icon" />
          </button>
        </div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.backdrop {
  display: grid;
  place-items: center;
  background-color: #909da275;
  width: 100vw;
  min-height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.modal {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 55px;
  background-color: #ffffff;
  width: 100%;
  height: 100dvh;
  padding: 20px 20px 20px;
  overflow: auto;
  z-index: 15;
  @media (min-width: 768px) {
    padding: 30px 40px;
  }

  @media (min-width: 1440px) {
    width: 90vw;
    height: auto;
    max-width: 1440px;
    padding: 60px 140px 75px;
  }
}
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 170px;
  }
  @media (min-width: 1440px) {
    position: static;
    gap: 220px;
  }
}

.logo {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}

.logo-text {
  width: 47px;
  height: 35px;
  @media (min-width: 768px) {
    display: none;
  }
}

.selector {
  @media (min-width: 768px) {
    display: none;
  }
  justify-self: end;
}

.link {
  display: none;
  text-align: right;
  text-decoration: underline;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.4px;
  letter-spacing: -0.03em;
  color: #22282b;

  @media (min-width: 768px) {
    display: block;
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
.icon {
  transform: rotate(45deg);
  fill: #f3f5f6;
  color: #22282b;
  transition: all 350ms ease;
  width: 42px;
  height: 42px;
  @media (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
}
.close {
  display: grid;
  place-items: center;
  border: none;
  border-radius: 50%;

  &:hover {
    .icon {
      color: #ffffff;
      fill: #0e5e40;
    }
  }
  &:active {
    .icon {
      color: #ffffff;
      fill: #073826;
    }
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 400ms ease;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}
</style>
