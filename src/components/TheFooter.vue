<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer">
        <img src="/LogotypeBlack.png" alt="Logo" class="logo" />
        <div class="content">
          <nav class="navigation">
            <a href="#" class="link">Terms & Conditions</a>
            <a href="#" class="link">Privacy Policy</a>
          </nav>
          <div class="wrapper">
            <a href="#" class="link created">Made by Byteoff</a>
            <p class="copyright">©{{ currentYear }} All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.container {
  padding: 0px 20px 25px;
  @media (min-width: 768px) {
    padding: 6px 42px 22px;
  }
  @media (min-width: 1440px) {
    padding: 60px 140px 100px;
  }
}
.footer {
  display: grid;
  grid-template-columns: auto 1fr;
  @media (min-width: 768px) {
    gap: 70px;
  }
}
.logo {
  width: 98px;
  height: 68px;
  @media (min-width: 768px) {
    width: 46px;
    height: 32px;
  }
  @media (min-width: 1440px) {
    width: 86px;
    height: 60px;
  }
}
.content {
  display: grid;
  justify-self: end;
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
    justify-self: auto;
  }
}

.navigation {
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  @media (min-width: 768px) {
    justify-self: left;
    align-self: center;
  }
  @media (min-width: 1440px) {
    justify-self: center;
  }
}

.wrapper {
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    align-items: end;
  }
}
.link {
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #909da2;
  display: block;

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 22px;
    color: #22282b;
  }
  &:hover {
    color: #0e5e40;
  }

  &:active {
    color: #073826;
  }
}
.copyright {
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #909da2;

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 22px;
  }
}
.created {
  text-decoration: underline;
  @media (min-width: 768px) {
    color: #22282b;
  }
}
</style>
