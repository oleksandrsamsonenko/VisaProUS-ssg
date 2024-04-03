<script setup>
import WhatsappIcon from '../icons/WhatsappIcon.vue'
import TelegramIcon from '../icons/TelegramIcon.vue'
import PhoneIcon from '../icons/PhoneIcon.vue'

const emit = defineEmits(['close'])
</script>

<template>
  <div class="content">
    <nav class="nav">
      <ul class="menu">
        <li class="item">
          <a href="#about" @click="emit('close', false)" class="menulink">About</a>
        </li>
        <li class="item">
          <a href="#services" @click="emit('close', false)" class="menulink">Services</a>
        </li>
        <li class="item">
          <a href="#contact" @click="emit('close', false)" class="menulink">Visa to USA</a>
        </li>
        <li class="item">
          <a href="#consultation" @click="emit('close', false)" class="menulink">Contact</a>
        </li>
      </ul>
    </nav>

    <div class="links">
      <ul class="margin buttons">
        <a href="#"><PhoneIcon class="icon" /></a>
        <a href="#"><TelegramIcon class="icon" /></a>
        <a href="#"><WhatsappIcon class="icon" /></a>
      </ul>

      <ul class="contacts">
        <li class="grid">
          <a href="tel:+12063591332" class="info">+1(206) 359-1332</a
          ><span class="lang">EN/RU</span>
        </li>
        <li class="grid">
          <a href="tel:+15612137046" class="info">+1(561) 213-7046</a><span class="lang">EN</span>
        </li>
        <li class="margin">
          <a href="mailto:visaprousa@gmail.com" class="info">visaprousa@gmail.com</a>
        </li>
        <li class="info margin">4389 10th PL SE Suite 202 <br />Deerfield Beach FL 33442</li>
      </ul>

      <ul class="apps">
        <a href="#" class="app-button"
          ><WhatsappIcon class="link-icon" /> <span class="link-text">WhatsApp</span></a
        >
        <a href="#" class="app-button"
          ><TelegramIcon class="link-icon" /> <span class="link-text">Telegram</span></a
        >
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-rows: 1fr auto;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: end;
    text-wrap: nowrap;
    padding-bottom: 60px;
  }
}

.menu {
  display: grid;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 20px;
  }
}
.menulink {
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  display: block;
  letter-spacing: -0.03em;
  text-align: left;
  color: #22282b;

  @media (min-width: 768px) {
    font-size: 54px;
    line-height: 64.8px;
  }

  @media (min-width: 1440px) {
    font-size: 72px;
    line-height: 86px;
  }
}

.info {
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: #909da2;

  @media (min-width: 768px) {
    font-size: 13.5px;
    line-height: 18.9px;
    color: #22282b;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
    color: #22282b;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}
.margin {
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (min-width: 1440px) {
    margin-top: 40px;
  }
}

.lang {
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  color: #909da2;

  @media (min-width: 768px) {
    font-size: 13.5px;
    line-height: 18.9px;
  }
}

.buttons {
  display: grid;
  justify-content: start;
  grid-template-columns: auto auto auto;
  gap: 20px;
  @media (min-width: 768px) {
    display: none;
  }
}

.contacts {
  margin-top: 30px;
  max-width: 50%;

  @media (min-width: 768px) {
    max-width: 100%;
  }
}

.icon {
  width: 42px;
  height: 42px;
}

.apps {
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 14px;
    margin-top: 30px;
    max-width: 50%;
  }
}

.app-button {
  display: block;
  padding: 8px 14px;
  background-color: #073826;
  border-radius: 40px;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 18.9px;
  letter-spacing: -0.02em;
  color: #ffffff;
  @media (min-width: 1440px) {
    background-color: transparent;
    padding: 0;
    width: fit-content;
  }
}

.link-icon {
  display: none;
  @media (min-width: 1440px) {
    display: block;
    width: 25px;
    height: 25px;
  }
}

.link-text {
  @media (min-width: 1440px) {
    display: none;
  }
}
</style>
