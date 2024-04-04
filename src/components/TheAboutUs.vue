<script setup>
// import { ref, onMounted } from 'vue'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

// const container = ref(null)
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger)

//   gsap.from(container.value.children, {
//     scrollTrigger: {
//       trigger: container.value,
//       toggleActions: 'restart pause resume pause'
//     },
//     delay: 0.5,
//     duration: 1,
//     stagger: 0.5,
//     scale: 0.8,
//     y: '+100',
//     autoAlpha: 0,
//     ease: 'back.out(1.7)'
//   })
// })
</script>

<template>
  <section id="about" class="container" ref="container">
    <div class="wrapper first">
      <h2 class="section-title text-indent">
        Our firm consists of experienced United States immigrations lawyers dedicated assisting
        individuals and businesses navigate the tangle of USA immigration laws
      </h2>
      <div class="content">
        <img
          src="/AboutUs1.jpg"
          alt="Our firm's objective"
          title="Our firm's objective"
          class="image"
        />
        <p class="secondary-text description border">
          We handle immigration matters throughout the United States, Europe and Asia. Our firm's
          objective is to provide you with personalized attention and professional service towards
          achieving your immigration needs and goals.
        </p>
      </div>
    </div>
    <div class="wrapper second">
      <p class="result primary-text">1k+ satisfied clients</p>
      <div>
        <div class="swap">
          <img
            src="/AboutUs2.jpg"
            alt="Always in touch"
            title="Always in touch"
            width="160px"
            height="114px"
            class="clients"
          />
          <h3 class="subtitle primary-text">
            An immigration law firm with a worldwide reach.Always in touch. Personal attention is at
            the forefront
          </h3>
        </div>
        <p class="paragraph secondary-text">
          On any given day, our lawyers may be representing a Florida-based or New York-based
          business with branches throughout the United States in the business's quest to bring in
          professionals or other skilled workers from Russia, India, Canada and other countries.
        </p>
      </div>
    </div>
    <div class="wrapper alternative">
      <div>
        <div class="swap">
          <img
            src="/AboutUs3.jpg"
            alt="Efficient solutions through technology"
            title="Efficient solutions through technology"
            width="160px"
            height="114px"
            class="flag"
          />
          <h3 class="subtitle primary-text">
            Efficient solutions through technology. Technology allows us to focus less on processes
            and more on meeting our clients needs
          </h3>
        </div>
        <p class="paragraph secondary-text">
          We remain at the forefront of the technology used to enhance law firm practices in
          general, as well as technology specific to immigration law. We earn the trust of the
          businesses and individuals we serve by being there for them when we are needed and
          responding with situation-specific immigration solutions.
        </p>
      </div>
      <p class="result primary-text">98% successful cases</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  margin-top: 120px;
  padding: 40px 0px 0px;
  display: grid;
  gap: 60px;
  @media (min-width: 768px) {
    padding: 40px 0px 0px;
    gap: 80px;
  }
  @media (min-width: 1440px) {
    margin-top: 160px;
    padding: 90px 0px;
  }
}

.text-indent {
  font-size: 26px;

  @media (min-width: 768px) {
    font-size: 32px;
    text-indent: 25%;
  }

  @media (min-width: 1440px) {
    font-size: 52px;
  }
}

.image {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 10/3.3;
  @media (min-width: 768px) {
    aspect-ratio: 10/4.5;
  }
  @media (min-width: 1440px) {
    aspect-ratio: 2.4 / 1;
  }
}

.wrapper {
  display: grid;
  gap: 30px;
  padding: 0px 20px;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  @media (min-width: 1440px) {
    padding: 0 140px;
  }
}

.first {
  gap: 30px;
  @media (min-width: 1440px) {
    gap: 85px;
  }
}

.second {
  @media (min-width: 768px) {
    grid-template-columns: 30% 1fr;
    gap: 90px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 35% 1fr;
    margin-top: 60px;
    gap: 140px;
  }
}

.content {
  display: grid;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 30% 1fr;
    gap: 90px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 35% 1fr;
    gap: 140px;
  }
}

.swap {
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;
  @media (min-width: 768px) {
    display: block;
  }
}

.clients {
  width: 100%;
  aspect-ratio: 10/3.3;
  object-fit: cover;
  object-position: bottom;
  @media (min-width: 768px) {
    width: 95px;
    height: 68px;
    float: inline-start;
    margin-right: 20px;
  }
  @media (min-width: 1440px) {
    margin-right: 40px;
    width: 25%;
    height: auto;
    aspect-ratio: 10/7;
  }
}

.flag {
  width: 100%;
  aspect-ratio: 10/3.3;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    float: inline-start;
    width: 93px;
    height: 68px;
    margin-right: 20px;
  }

  @media (min-width: 1440px) {
    margin-right: 40px;
    width: 25%;
    height: auto;
    aspect-ratio: 10/7;
  }
}
.result {
  text-align: right;
  @media (min-width: 768px) {
    text-align: left;
    padding-top: 45px;
  }
  @media (min-width: 1440px) {
    padding-top: 70px;
  }
}
.description {
  @media (min-width: 1440px) {
    font-size: 21px;
    line-height: 27px;
  }
}

.subtitle {
  @media (min-width: 768px) {
    padding-top: 45px;
  }
  @media (min-width: 1440px) {
    padding-top: 70px;
  }
}

.paragraph {
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #909da2;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18.2px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
    margin-top: 25px;
  }
}

.border {
  @media (min-width: 768px) {
    border-top: 1px solid #e6e9ea;
    display: grid;
    align-items: flex-end;
  }
}

.alternative {
  display: flex;
  flex-direction: column-reverse;
  background-color: #073826;
  padding: 40px 20px 27px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 35%;
    gap: 15px;
    padding: 40px 40px;
  }
  @media (min-width: 1440px) {
    gap: 140px;
    padding: 90px 140px 90px;
  }

  .result {
    color: #fff;
    text-align: left;
  }
  .subtitle {
    color: #fff;
  }
}
</style>
