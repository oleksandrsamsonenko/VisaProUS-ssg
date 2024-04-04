<script setup></script>

<template>
  <section class="container">
    <div class="wrapper">
      <h2 class="section-title">Meet our team</h2>
      <p class="secondary-text description">
        We earn the trust of the businesses and individuals we serve by being there for them when we
        are needed and responding with situation-specific immigration solutions. Our clients are
        confident in returning to us at any time they encounter an immigration-related challenge.
        The businesses we serve return to us whenever they need help bringing employees onboard from
        other countries or when they have concerns about compliances with immigration laws.
      </p>
      <p class="secondary-text description">
        They frequently refer their colleagues to us as well. Furthermore, it is not unusual for
        employees whose entry into the United States we have assisted with to come to us for help
        gaining citizenship or bringing their relatives into the country. More than anything else,
        we consider these long-standing, trusted relationships proof of our success.
      </p>
    </div>
    <ul class="team">
      <li class="member">
        <img src="/OurTeam/1.jpg" alt="Andre Yeremin" title="Andre Yeremin" class="picture" />
        <h3 class="name">Andre Yeremin</h3>
        <p class="secondary-text position">
          Immigration Law/ ITAR International Traffic an Arms Regulations Pepperdine School of Law (
          Malibu California)
        </p>
      </li>
      <li class="member">
        <img src="/OurTeam/2.jpg" alt="Anna Murray" title="Anna Murray" class="picture" />
        <h3 class="name">Anna Murray</h3>
        <p class="secondary-text position">
          Immigration Law / Criminal Defense Law. Washington University School of Law (St. Louis
          Missouri)
        </p>
      </li>
      <li class="member">
        <img src="/OurTeam/3.jpg" alt="Alona Sulman" title="Alona Sulman" class="picture" />
        <h3 class="name">Alona Sulman</h3>
        <p class="secondary-text position">Immigration Law. New York Law School (New York, NY)</p>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.container {
  padding: 120px 20px 0px;
  @media (min-width: 768px) {
    padding: 170px 40px 0px;
    display: grid;
    gap: 80px;
    grid-template-columns: 40% 1fr;
  }
  @media (min-width: 1440px) {
    padding: 90px 140px;
    gap: 140px;
  }
}

.section-title {
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
}

.description {
  margin-top: 20px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    margin-top: 15px;
  }
  @media (min-width: 1440px) {
    margin-top: 32px;
  }
}

.team {
  margin-top: 60px;
  display: grid;
  gap: 30px;
  @media (min-width: 768px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    row-gap: 40px;
    column-gap: 25px;
  }
  @media (min-width: 1440px) {
    row-gap: 70px;
    column-gap: 40px;
  }
}

.member {
  @media (min-width: 1440px) {
    max-width: 260px;
  }
}
.picture {
  width: 100%;
}

.name {
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 20px;
  color: #22282b;

  @media (min-width: 768px) {
    font-size: 12.5px;
    line-height: 16.25px;
    margin-top: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 21px;
    line-height: 27px;
    margin-top: 20px;
  }
}

.position {
  font-size: 10px;
  line-height: 14px;
  text-align: left;
  margin-top: 11px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18.2px;
    margin-top: 6px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
    margin-top: 11px;
  }
}
</style>
