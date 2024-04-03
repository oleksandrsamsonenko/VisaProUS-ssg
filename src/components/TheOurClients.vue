<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import ControlsIconVue from './icons/ControlsIcon.vue'

import 'swiper/css'
import 'swiper/css/pagination'

const feedbacks = [
  {
    id: 1,
    feedback:
      '"Donec sollicitudin amet egestas mi. Consectetur sit sollicitudin rutrum eu. Tincidunt amet, volutpat consectetur ullamcorper bibendum egestas."',
    position: 'Alex Larkins, Art director at Airbnb',
    avatar: '/FeedbackAvatar.jpg'
  },
  {
    id: 2,
    feedback:
      '"Donec sollicitudin amet egestas mi. Consectetur sit sollicitudin rutrum eu. Tincidunt amet, volutpat consectetur ullamcorper bibendum egestas."',
    position: 'Alex Larkins, Art director at Airbnb',
    avatar: '/FeedbackAvatar.jpg'
  },
  {
    id: 3,
    feedback:
      '"Donec sollicitudin amet egestas mi. Consectetur sit sollicitudin rutrum eu. Tincidunt amet, volutpat consectetur ullamcorper bibendum egestas."',
    position: 'Alex Larkins, Art director at Airbnb',
    avatar: '/FeedbackAvatar.jpg'
  },
  {
    id: 4,
    feedback:
      '"Donec sollicitudin amet egestas mi. Consectetur sit sollicitudin rutrum eu. Tincidunt amet, volutpat consectetur ullamcorper bibendum egestas."',
    position: 'Alex Larkins, Art director at Airbnb',
    avatar: '/FeedbackAvatar.jpg'
  },
  {
    id: 5,
    feedback:
      '"Donec sollicitudin amet egestas mi. Consectetur sit sollicitudin rutrum eu. Tincidunt amet, volutpat consectetur ullamcorper bibendum egestas."',
    position: 'Alex Larkins, Art director at Airbnb',
    avatar: '/FeedbackAvatar.jpg'
  }
]

const swiperRef = ref()
const modules = [Pagination]
const pagination = {
  clickable: true
}

const prevSlide = () => {
  swiperRef.value.$el.swiper.slidePrev()
}
const isPrevDisabled = computed(() => swiperRef.value?.$el?.swiper.isBeginning)

const nextSlide = () => {
  swiperRef.value.$el.swiper.slideNext()
}
const isNextDisabled = computed(() => swiperRef.value?.$el?.swiper.isEnd)
</script>

<template>
  <section class="container">
    <div class="header">
      <h2 class="section-title">Some of happy clients</h2>
      <div class="controls">
        <button class="button" @click="prevSlide" :disabled="isPrevDisabled">
          <ControlsIconVue class="icon reversed" />
        </button>
        <button class="button" @click="nextSlide" :disabled="isNextDisabled">
          <ControlsIconVue class="icon" />
        </button>
      </div>
    </div>
    <swiper
      :modules="modules"
      ref="swiperRef"
      :pagination="pagination"
      slideToClickedSlide
      class="swiper"
      :breakpoints="{
        300: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        1440: {
          slidesPerView: 1.5,
          spaceBetween: 40,
          grabCursor: true,
          pagination: false
        }
      }"
    >
      <swiper-slide v-for="item in feedbacks" :key="item" class="item">
        <img :src="item.avatar" :alt="item.position" class="avatar" />
        <div class="wrapper">
          <p class="primary-text">{{ item.feedback }}</p>
          <p class="secondary-text">{{ item.position }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style scoped lang="scss">
.container {
  padding: 60px 20px;
  @media (min-width: 1440px) {
    margin-top: 60px;
    padding: 90px 140px;
  }
}

.header {
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding-bottom: 40px;
    position: relative;
  }
  @media (min-width: 1440px) {
    &::after {
  position: absolute;
  content: '';
  height: 1px;
  width: 100%;
  background-color: #e6e9ea;
  bottom: 0;
  left: 0;
}
  }
}


.swiper {
  margin-top: 60px;
}

.controls {
  display: none;
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

.button {
  width: fit-content;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
}

.icon {
  transition: all 350ms ease;
  stroke: grey;
}

.button:not(:disabled) {
  .icon {
    stroke: #073826;
    color: #073826;
  }

  .icon:hover {
    color: #ffffff;
    fill: #0e5e40;
    stroke: #0e5e40;
  }

  .icon:active {
    color: #ffffff;
    fill: #073826;
    stroke: #073826;
  }
}
.button:disabled {
  filter: grayscale(1);
  opacity: 0.3;
}

.reversed {
  transform: rotate(180deg);
}

.item {
  display: grid;
  grid-template-columns: 10% 1fr;
  gap: 16px;
  padding-bottom: 45px;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
  }
}

.avatar {
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1;
  transition: all 350ms ease;

  @media (min-width: 768px) {
    height: 43px;
    width: 43px;
  }
  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;
  }
}

.wrapper {
  display: grid;
  gap: 10px;
  transition: all 350ms ease;

  @media (min-width: 1440px) {
    gap: 25px;
  }
}

.swiper-slide-next,
.swiper-slide-prev {
  & .avatar {
    opacity: 0.5;
  }

  & .wrapper {
    opacity: 0.5;
  }
}
</style>
