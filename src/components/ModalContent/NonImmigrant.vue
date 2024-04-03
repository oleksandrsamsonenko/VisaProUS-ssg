<script setup></script>

<template>
  <div class="content">
    <ul class="list">
      <li class="item">
        <h2 class="subtitle">Nonimmigrant visas</h2>
        <p class="text">
          Allow a non-citizen to travel to the United States for a specific purpose, usually for a
          limited time. An individual who wishes to travel to the United States and requires a
          nonimmigrant visa must appear at a U.S. consular office abroad and formally request the
          issuance of a visa. Visa issuance is discretionary. This means that they may reject the
          visa application for any reason or no reason.
        </p>
      </li>
      <li class="item">
        <h2 class="subtitle">Visa Waivers</h2>
        <p class="text">
          Citizens of certain countries are eligible for a visa waiver if they are only coming to
          the United States as a visitor for 90 days or less and meet certain other requirements.
          Also, Canadian citizens do not require visas to enter the United States. They must,
          however, show proof of eligibility for the nonimmigrant category in which they claim
          eligibility.
        </p>
      </li>
      <li class="item">
        <h2 class="subtitle">Visas That Require Petitions</h2>
        <p class="text">
          Certain nonimmigrant visas require petition approval through the USCIS before a visa may
          be issued. An applicant for a visa in any of these categories must have a qualified
          petitioner successfully file a petition with the USCIS before any further action may be
          taken. Unless and until the petition is approved, the individual may not apply for any of
          these specified visas.
        </p>
      </li>
      <li class="item">
        <h2 class="subtitle">H1B, H2, H3, K, L, O, P</h2>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.content {
  padding: 0px 0px 30px;
}
.list {
  display: grid;
  gap: 30px;
  @media (min-width: 1440px) {
    gap: 60px;
  }
}
.item {
  display: grid;
  gap: 30px;
}
.subtitle {
  font-size: 14px;
  font-weight: 700;
  line-height: 19.6px;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 19.6px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
  }
}
.text {
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #909da2;

  @media (min-width: 768px) {
    font-size: 10.71px;
    line-height: 14.99px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
  }
}
</style>
