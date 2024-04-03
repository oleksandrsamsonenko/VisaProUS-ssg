<script setup></script>

<template>
  <div class="content">
    <div class="wrapper">
      <h2 class="title">
        Citizenship issues encompass such things as citizenship at birth, citizenship acquired
        through parents, and naturalization
      </h2>
      <p class="description">
        Family based visas; Immediate relatives; <br />
        Spouses of U.S. citizens, Minor Unmarried children of U.S.
      </p>
    </div>
    <ul class="list">
      <li class="item">
        <h3 class="subtitle">First Preference</h3>
        <ul class="sublist">
          <li class="subitem">Unmarried adult children of U.S. citizens</li>
        </ul>
      </li>
      <li class="item">
        <h3 class="subtitle">Second Preference</h3>
        <ul class="sublist">
          <li class="subitem">
            Spouses and unmarried minor children of lawful permanent residents
          </li>
          <li class="subitem">Unmarried adult children of lawful permanent residents</li>
        </ul>
      </li>
      <li class="item">
        <h3 class="subtitle">Third Preference</h3>
        <ul class="sublist">
          <li class="subitem">Married children of U.S. citizens</li>
        </ul>
      </li>
      <li class="item">
        <h3 class="subtitle">Fourth Preference</h3>
        <ul class="sublist">
          <li class="subitem">Siblings of U.S. citizens over age of 21</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: grid;
  gap: 30px;
  grid-template-rows: max-content max-content;

  @media (min-width: 768px) {
    gap: 25px;
  }
}

.wrapper {
  display: grid;
  gap: 20px;
  @media (min-width: 1440px) {
    gap: 44px;
  }
}

.title {
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

.description {
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: -0.02em;
  color: #909da2;

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
  }
}

.subtitle {
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: -0.02em;
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25.2px;
  }
}
.list {
  display: grid;
  gap: 30px;
  @media (min-width: 768px) {
    grid-template-areas: 'a b' 'c d';
    grid-template-columns: 40% 1fr;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 40% 1fr;
    column-gap: 80px;
    row-gap: 65px;
  }
}

.item {
  @media (min-width: 768px) {
    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: c;
    }
    &:nth-child(3) {
      grid-area: b;
    }
    &:nth-child(4) {
      grid-area: d;
    }
  }
}
.sublist {
  list-style-type: disc;
  color: #909da2;
  padding-left: 30px;
}
.subitem {
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: -0.02em;

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25.2px;
  }
}
</style>
