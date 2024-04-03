<script setup>
// import { ref, onMounted } from 'vue'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

import ArrowIcon from './icons/ArrowIcon.vue'

// const hero = ref(null)

// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger)

//   gsap.from(hero.value, {
//     scrollTrigger: {
//       trigger: hero.value,
//       toggleActions: 'restart pause resume pause'
//     },
//     delay: 1,
//     duration: 1,
//     y: '+100',
//     autoAlpha: 0,
//     ease: 'back.out(1.7)'
//   })
// })
</script>

<template>
  <section class="hero">
    <div class="wrapper" ref="hero">
      <h1 class="hero-title">
        Serving your <br />
        immigration needs
      </h1>
      <div class="description">
        <p class="paragraph">
          Qualified assistance in preparing documents for successful immigration to the USA. There
          for our clients whenever they need us
        </p>
        <a class="link" href="#consultation"
          ><ArrowIcon class="icon" /> <span class="text">Online consultation</span></a
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding: 330px 0 0;
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(144, 255, 214, 0.33) 50%,
      rgb(0, 1, 1) 100%
    ),
    url('/MobileBG.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
    padding: 160px 0 0;
    background-image: url('/TabletBG.jpg');
  }
  @media (min-width: 1440px) {
    padding: 300px 0 0;
    background-image: url('/DesktopBG.jpg');
  }
}
.wrapper {
  display: grid;
  gap: 20px;
  padding: 0 20px 52px;
  text-align: center;
  @media (min-width: 768px) {
    gap: 30px;
    padding: 0 40px 40px;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(144, 255, 214, 0.33) 50%,
      rgb(0, 1, 1) 100%
    );
  }

  @media (min-width: 1440px) {
    gap: 40px;
  }
}
.hero-title {
  font-size: 42px;
  font-weight: 600;
  line-height: 54.6px;
  text-align: left;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 58px;
    line-height: 75.4px;
    letter-spacing: -0.02em;
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    font-size: 110px;
    line-height: 143px;
  }
}
.description {
  display: grid;
  width: 100%;
  grid-template-columns: 60% auto;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    justify-content: center;
    grid-template-columns: 1fr;
    gap: 35px;
  }
  @media (min-width: 1440px) {
    padding: 0px 160px;
  }
}
.paragraph {
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #909da2;
  @media (min-width: 768px) {
    max-width: 30%;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
  }
  @media (min-width: 1440px) {
    font-size: 13px;
    line-height: 18.2px;
  }
}
.link {
  font-size: 12.6px;
  font-weight: 600;
  line-height: 15.12px;
  letter-spacing: -0.02em;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  margin-left: auto;
  border: none;
  border-radius: 35px;
  background-color: transparent;

  color: #fff;
  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 22px;
  }

  .icon {
    width: 41px;
    height: 41px;
    color: #073826;
    fill: #ffffff;
    transition: all 400ms ease;
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

.text {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
</style>
