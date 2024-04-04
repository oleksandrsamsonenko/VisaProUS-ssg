<script setup>
import { ref } from 'vue'
import * as Lock from 'v3-scroll-lock'
import TheModal from './TheModal.vue'
import NonImmigrant from './ModalContent/NonImmigrant.vue'
import EmploymentBased from './ModalContent/EmploymentBased.vue'
import CitizenshipIssues from './ModalContent/CitizenshipIssues.vue'
import MoreIconVue from './icons/MoreIcon.vue'

const { lockScroll, unlockScroll } = Lock

const contentIndex = ref(0)
const modal = ref()

const setModal = (value) => {
  if (value !== 0) {
    lockScroll(modal, { reserveScrollBarGap: true })
  }
  if (value === 0) {
    unlockScroll(modal)
  }
  contentIndex.value = value
}
</script>

<template>
  <section id="services" class="container">
    <h2 class="section-title">Our services</h2>
    <ul class="list">
      <li class="item">
        <span class="number">01</span>
        <div class="wrapper">
          <img
            src="/OurServices/1.jpg"
            alt="Nonimmigrant Visas"
            title="Nonimmigrant Visas"
            class="image"
          />
          <div class="text-wrapper">
            <h3 class="primary-text">Nonimmigrant Visas</h3>
            <p class="secondary-text description">
              Nonimmigrant visas allow a non-citizen to travel to the United States for a specific
              purpose, usually for a limited time.
            </p>
          </div>
          <button class="button" @click="setModal(1)"><MoreIconVue class="icon" /></button>
        </div>
      </li>
      <li class="item">
        <span class="number">02</span>
        <div class="wrapper">
          <img
            src="/OurServices/2.jpg"
            alt="Employment Based Visas"
            title="Employment Based Visas"
            class="image"
          />
          <div class="text-wrapper">
            <h3 class="primary-text">Employment Based Visas</h3>
            <p class="secondary-text description">
              Vehicula id eget in in id vestibulum massa facilisi. Malesuada quisque at nisl.
            </p>
          </div>
          <button class="button" @click="setModal(2)"><MoreIconVue class="icon" /></button>
        </div>
      </li>
      <li class="item">
        <span class="number">03</span>
        <div class="wrapper">
          <img
            src="/OurServices/3.jpg"
            alt="Citizenship issues"
            title="Citizenship issues"
            class="image"
          />
          <div class="text-wrapper">
            <h3 class="primary-text">Citizenship issues</h3>
            <p class="secondary-text description">
              Citizenship at birth, citizenship acquired through parents, and naturalization.
            </p>
          </div>
          <button class="button" @click="setModal(3)"><MoreIconVue class="icon" /></button>
        </div>
      </li>
    </ul>
    <teleport to="#modal">
      <TheModal :isOpen="contentIndex === 1" @close="setModal(0)">
        <NonImmigrant ref="modal"
      /></TheModal>
      <TheModal :isOpen="contentIndex === 2" @close="setModal(0)">
        <EmploymentBased ref="modal"
      /></TheModal>
      <TheModal :isOpen="contentIndex === 3" @close="setModal(0)"
        ><CitizenshipIssues ref="modal" />
      </TheModal>
    </teleport>
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

.section-title {
  text-align: center;
  @media (min-width: 1440px) {
    text-align: left;
  }
}
.list {
  margin-top: 60px;
  display: grid;
  gap: 30px;
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
}

.item {
  padding: 20px 20px;
  aspect-ratio: 1.28;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:nth-child(1) {
    background-image: linear-gradient(
        0.29deg,
        rgba(0, 0, 0, 0.4) 0.14%,
        rgba(25, 25, 25, 0.4) 23.58%,
        rgba(255, 255, 255, 0) 99.64%
      ),
      url('/OurServices/BG1.jpg');
    @media (min-width: 1440px) {
      background-image: none;
    }
  }

  &:nth-child(2) {
    background-image: linear-gradient(
        0.29deg,
        rgba(0, 0, 0, 0.4) 0.14%,
        rgba(25, 25, 25, 0.4) 23.58%,
        rgba(255, 255, 255, 0) 99.64%
      ),
      url('/OurServices/BG2.jpg');
    @media (min-width: 1440px) {
      background-image: none;
    }
  }
  &:nth-child(3) {
    background-image: linear-gradient(
        0.29deg,
        rgba(0, 0, 0, 0.4) 0.14%,
        rgba(25, 25, 25, 0.4) 23.58%,
        rgba(255, 255, 255, 0) 99.64%
      ),
      url('/OurServices/BG3.jpg');
    @media (min-width: 1440px) {
      background-image: none;
    }
  }

  @media (min-width: 768px) {
    padding: 30px 30px;
  }
  @media (min-width: 1440px) {
    aspect-ratio: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 140px;
    align-items: center;
    padding: 40px 0;
    border-top: 1px solid #e6e9ea;

    &:last-child {
      border-bottom: 1px solid #e6e9ea;
    }
  }
}

.number {
  font-size: 52px;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: -0.03em;
  color: #22282b;
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
}

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (min-width: 1440px) {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 160px;
  }
}

.primary-text {
  color: #ffffff;
  @media (min-width: 1440px) {
    color: #22282b;
  }
}

.image {
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
}

.description {
  margin-top: 10px;
  color: #f3f5f6;

  @media (min-width: 768px) {
    margin-top: 20px;
  }

  @media (min-width: 1440px) {
    color: #22282b;
  }
}
.icon {
  fill: #ffffff;
  color: #073826;
  @media (min-width: 1440px) {
    fill: #073826;
    color: #ffffff;
    transition: all 350ms ease;
    width: 69px;
    height: 69px;
  }
}
.button {
  display: grid;
  place-items: center;
  border: none;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  align-self: end;

  &:active {
    .icon {
      color: #073826;
    }
  }

  @media (min-width: 1440px) {
    align-self: auto;
    &:hover {
      .icon {
        fill: #0e5e40;
      }
    }
  }
}
</style>
