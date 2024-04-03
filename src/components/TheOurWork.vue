<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import ControlsIconVue from './icons/ControlsIcon.vue'

import 'swiper/css'
import 'swiper/css/pagination'

const carouselData = [
  {
    id: 1,
    title: 'Collection of documents',
    text: 'Eget faucibus tortor odio dignissim hendrerit velit felis. Amet, donec eu sit id non dictumst. Diam lectus egestas faucibus turpis et. Morbi mattis morbi vulputate scelerisque id amet cras et.'
  },
  {
    id: 2,
    title: 'Transfer of information',
    text: 'Eget faucibus tortor odio dignissim hendrerit velit felis. Amet, donec eu sit id non dictumst. Diam lectus egestas faucibus turpis et. Morbi mattis morbi vulputate scelerisque id amet cras et.'
  },
  {
    id: 3,
    title: 'Filling out USCIS forms',
    text: 'Eget faucibus tortor odio dignissim hendrerit velit felis. Amet, donec eu sit id non dictumst. Diam lectus egestas faucibus turpis et. Morbi mattis morbi vulputate scelerisque id amet cras et.'
  }
]
const swiperRef = ref()
const modules = [Pagination]
const pagination = {
  clickable: true
}

// const activeIdx = ref(0)

// const setActive = (val) => {
//   activeIdx.value += val
// }
// const chooseActiveTab = (val) => {
//   activeIdx.value = val
// }

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
      <h2 class="section-title">Our working process</h2>
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
      class="carousel"
      :breakpoints="{
        300: {
          slidesPerView: 1,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 40,
          grabCursor: true,
          pagination: false
        }
      }"
    >
      <swiper-slide v-for="item in carouselData" :key="item.id" class="item">
        <span class="number">{{ item.id.toString().padStart(2, '0') }}</span>
        <h3 class="subtitle">{{ item.title }}</h3>
        <p class="text">{{ item.text }}</p>
      </swiper-slide>
      <swiper-slide class="tablet-fill"></swiper-slide>
      <swiper-slide class="desktop-fill"></swiper-slide>
    </swiper>
  </section>
</template>

<style scoped lang="scss">
.tablet-fill {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
.desktop-fill {
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
}
.container {
  padding: 60px 20px;

  @media (min-width: 1440px) {
    margin-top: 160px;
    padding: 90px 140px;
  }
}
.header {
  display: grid;
  grid-template-columns: 1fr auto;
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
  border: none;
  border-radius: 50%;
  background-color: transparent;
}
.carousel {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.item {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 25px;
  padding-bottom: 45px;
  @media (min-width: 1440px) {
    gap: 30px;
  }
}
.number {
  display: block;
  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: -0.03em;
  color: #e6e9ea;
  border-bottom: 2px solid #e6e9ea;
  padding-bottom: 15px;
  transition: all 400ms ease;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28.6px;
  }
}
.subtitle {
  font-size: 36px;
  font-weight: 600;
  line-height: 47px;
  letter-spacing: -0.03em;
  color: #e6e9ea;
  transition: all 400ms ease;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28.6px;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 47px;
  }
}
.text {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #e6e9ea;
  transition: all 400ms ease;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 19.6px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
  }
}

.swiper-slide-active {
  & .number {
    color: #22282b;
    border-bottom: 2px solid #073826;
  }
  & .subtitle {
    color: #22282b;
  }
  & .text {
    color: #909da2;
  }
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
</style>
