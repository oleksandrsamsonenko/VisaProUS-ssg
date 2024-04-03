<script setup>
import { ref } from 'vue'
import { Collapse } from 'vue-collapsed'
import MinusIconVue from './icons/MinusIcon.vue'
import PlusIconVue from './icons/PlusIcon.vue'

const activeTabIdx = ref(0)

const setActiveIdx = (val) => {
  activeTabIdx.value = val
}

const accordeonData = [
  {
    id: 1,
    title: 'Pellentesque non arcu adipiscing mattis?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque?'
  },
  {
    id: 2,
    title: 'Imperdiet blandit aliquam nunc?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque?'
  },
  {
    id: 3,
    title: 'Pellentesque non arcu adipiscing mattis?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque?'
  },
  {
    id: 4,
    title: 'Sem lacus, erat venenatis?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque?'
  }
]
</script>

<template>
  <section class="container">
    <h2 class="section-title">Frequently asked questions</h2>
    <ul class="accordeon">
      <li
        class="item"
        v-for="item in accordeonData"
        :key="item.id"
        :class="{ active: activeTabIdx === item.id }"
      >
        <span class="primary-text">{{ item.id.toString().padStart(2, '0') }}</span>
        <div class="wrapper">
          <h3 class="subtitle">{{ item.title }}</h3>
          <Collapse :when="activeTabIdx === item.id" class="v-collapse"
            ><p class="description">{{ item.text }}</p></Collapse
          >
        </div>
        <button v-if="activeTabIdx !== item.id" class="button" @click="setActiveIdx(item.id)">
          <PlusIconVue class="icon" />
        </button>
        <button v-else class="button" @click="setActiveIdx(0)">
          <MinusIconVue class="icon" />
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.container {
  padding: 60px 0px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    margin-top: 160px;
    padding: 90px 160px;
  }
}

.section-title {
  padding: 0px 20px;
}

.accordeon {
  margin-top: 40px;
}

.item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 20px;
  padding: 40px 20px;
  background-color: #f3f5f6;
  border: 1px solid #e6e9ea;
  transition: all 400ms ease;
  @media (min-width: 1440px) {
    gap: 120px;
    padding: 40px;
  }
}

.wrapper {
  display: grid;
}
.subtitle {
  font-size: 22px;
  line-height: 28.6px;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #22282b;
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 31px;
  }
}

.primary-text {
  font-size: 26px;
  line-height: 33.8px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28.6px;
  }
  @media (min-width: 1440px) {
    font-size: 52px;
    line-height: 62.4px;
  }
}
.description {
  padding-top: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #22282b;

  @media (min-width: 768px) {
    padding-top: 15px;
    font-size: 10px !important;
    line-height: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 18px !important;
    line-height: 25px;
    padding-top: 30px;
  }
}

.icon {
  color: #073826;
  fill: #ffffff;
  transition: all 350ms ease;
  width: 41px;
  height: 41px;
}

.button {
  display: grid;
  place-items: center;
  width: fit-content;
  height: fit-content;
  color: #073826;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  transition: all 350ms ease;

  &:hover {
    .icon {
      @media (min-width: 1440px) {
        color: #0e5e40;
        fill: #ffffff;
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

.active {
  background-color: #073826;
  .primary-text {
    color: #ffffff;
  }
  .subtitle {
    color: #ffffff;
  }
  .description {
    padding-top: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #ffffff;

    @media (min-width: 768px) {
      padding-top: 15px;
      font-size: 10px !important;
      line-height: 14px;
    }
    @media (min-width: 1440px) {
      font-size: 18px !important;
      line-height: 25px;
      padding-top: 30px;
    }
  }
}

.v-collapse {
  transition: height 400ms ease-out;
}
</style>
