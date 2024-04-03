<script setup>
import PhoneIcon from './icons/PhoneIcon.vue'
import TelegramIcon from './icons/TelegramIcon.vue'
import WhatsappIcon from './icons/WhatsappIcon.vue'
</script>

<template>
  <section id="contact" class="container">
    <p class="header">Contact us</p>
    <div class="content">
      <a href="mailto:visaprousa@gmail.com" class="section-title title">visaprousa@gmail.com</a>

      <ul class="contacts">
        <li class="item"><a href="tel:+12063591332" class="link">+1(206)359-1332</a></li>
        <li class="item"><a href="tel:+15612137046" class="link">+1(561)213-7046</a></li>
        <li class="item"><a href="#" target="_blank" class="link">WhatsApp</a></li>
        <li class="item"><a href="#" target="_blank" class="link">Telegram</a></li>
      </ul>
      <div class="info">
        <p class="secondary-text text">
          4389 10th PL SE Suite 202 <br />
          Deerfield Beach FL 33442
        </p>
        <ul class="buttons">
          <a href="#"><PhoneIcon class="icon" /></a>
          <a href="#"><TelegramIcon class="icon" /></a>
          <a href="#"><WhatsappIcon class="icon" /></a>
        </ul>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.70115910146!2d-80.1653050238925!3d26.30378618599243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91ced7402d7b9%3A0xf7300db67b392611!2zNDM4OSBTVyAxMHRoIFBsICMyMDIsIERlZXJmaWVsZCBCZWFjaCwgRkwgMzM0NDIsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1710713815303!5m2!1sru!2sua"
          width="100%"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  padding: 60px 0px 30px;
  @media (min-width: 1440px) {
    margin-top: 160px;
    padding: 90px 140px;
  }
}

.content {
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1440px) {
    gap: 40px;
  }
}

.header {
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  color: #909da2;
}

.title {
  text-align: center;
  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 50.4px;
  }
  @media (min-width: 1440px) {
    font-size: 52px;
    line-height: 62.4px;
  }
}
.contacts {
  display: none;
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
    margin: 0 auto;
  }
}
.link {
  display: block;
  padding: 11px 24px;
  border-radius: 24px;
  background-color: #f3f5f6;
  transition: all 350ms ease;
  &:hover {
    color: #ffffff;
    background-color: #0e5e40;
  }
  &:active {
    color: #ffffff;
    background-color: #073826;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }
}

.buttons {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 42px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 50px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
}

.icon {
  width: 48px;
  height: 48px;
}
.address {
  width: 560px;
  border: 1px solid teal;
}
.text {
  text-align: center;
  text-align: center;
  position: relative;
  @media (min-width: 768px) {
    padding-top: 22px;
    font-size: 10px;
    line-height: 14px;
  }
  @media (min-width: 1440px) {
    padding-top: 40px;
    font-size: 18px;
    line-height: 25.2px;
  }
}

.text::before {
  @media (min-width: 768px) {
    position: absolute;
    content: '';
    height: 1px;
    width: 45%;
    background-color: #e6e9ea;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
.map {
  padding-top: 120px;
  @media (min-width: 1440px) {
    margin-top: 60px;
    // display: flex;
  }
}
</style>
