<script setup></script>

<template>
  <div class="content">
    <h2 class="title">There Are Five Categories Of Employment Based Visas:</h2>
    <ul class="list">
      <li class="item">
        <h3 class="subtitle">First Preference</h3>
        <ul class="sublist">
          <li class="subitem">Individuals with extraordinary ability</li>
          <li class="subitem">Outstanding professors and researchers</li>
          <li class="subitem">Multinational executives and managers</li>
        </ul>
      </li>
      <li class="item">
        <h3 class="subtitle">Second Preference</h3>
        <ul class="sublist">
          <li class="subitem">Advance degree professionals</li>
          <li class="subitem">Persons with exceptional ability</li>
          <li class="subitem">National interest waivers</li>
        </ul>
      </li>
      <li class="item">
        <h3 class="subtitle">Third Preference</h3>
        <ul class="sublist">
          <li class="subitem">Professionals</li>
          <li class="subitem">Skilled workers</li>
          <li class="subitem">Other workers</li>
        </ul>
      </li>
      <li class="item">
        <h3 class="subtitle">Fourth Preference</h3>
        <ul class="sublist">
          <li class="subitem">Religious workers</li>
          <li class="subitem">Special immigrant juveniles</li>
          <li class="subitem">Broadcasters</li>
          <li class="subitem">
            G-4 international organization or NATO-6 employees and their family members
          </li>
          <li class="subitem">International employees of the U.S. government abroad</li>
          <li class="subitem">Armed forces members</li>
          <li class="subitem">Panama canal zone employees</li>
          <li class="subitem">Certain physicians</li>
          <li class="subitem">Afghan and Iraqi translators</li>
          <li class="subitem">Afghan and Iraqi</li>
        </ul>
      </li>
      <li class="item">
        <h3 class="subtitle">Fifth Preference</h3>
        <ul class="sublist">
          <li class="subitem">Immigrant investors</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 19.6px;
  letter-spacing: -0.02em;

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
  }
}
.content {
  display: grid;
  gap: 40px;
  @media (min-width: 768px) {
    gap: 25px;
  }
}
.list {
  display: grid;
  gap: 30px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 40% 1fr;
    column-gap: 70px;
    row-gap: 20px;
    grid-template-areas:
      'a d'
      'b d'
      'c e';
  }
  @media (min-width: 1440px) {
    grid-template-columns: 30% 1fr;
    column-gap: 70px;
    row-gap: 25px;
  }
}
.item {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    &:nth-child(5) {
      grid-area: e;
    }
  }
}

.subtitle {
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
}
.sublist {
  padding-left: 30px;
  list-style-type: disc;
}
.subitem {
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  color: #909da2;
}
</style>
