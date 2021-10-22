<template>
  <div class="cards__container">
    <div class="cards__card">
      <div class="cards__header">
        <div class="cards__icon"></div>
        <div class="cards__title">Emergency Case</div>
      </div>
      <div class="cards__options">
        <div class="cards__content">
          <div class="cards__option">- The best products start with Figma</div>
          <div class="cards__option">- Design with real data</div>
          <div class="cards__option">- Lightning fast prototyping</div>
          <div class="cards__option">- Fastest way to organize</div>
          <div class="cards__option">- Work at the speed of thought.</div>
          <button class="cards__button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="cards__card">
      <div class="cards__header">
        <div class="cards__icon"></div>
        <div class="cards__title">Cancer Care</div>
      </div>
      <div class="cards__options">
        <div class="cards__content">
          <div class="cards__option">- The best products start with Figma</div>
          <div class="cards__option">- Design with real data</div>
          <div class="cards__option">- Lightning fast prototyping</div>
          <div class="cards__option">- Fastest way to organize</div>
          <div class="cards__option">- Work at the speed of thought.</div>
          <button class="cards__button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="cards__card">
      <div class="cards__header">
        <div class="cards__icon"></div>
        <div class="cards__title">Health Queries</div>
      </div>
      <div class="cards__options">
        <div class="cards__content">
          <div class="cards__option">- The best products start with Figma</div>
          <div class="cards__option">- Design with real data</div>
          <div class="cards__option">- Lightning fast prototyping</div>
          <div class="cards__option">- Fastest way to organize</div>
          <div class="cards__option">- Work at the speed of thought.</div>
          <button class="cards__button">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsContainer",
};
</script>

<style scoped lang="scss">
@import "src/styles/button";
@import "src/styles/variables";

.cards {
  &__container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #d9edff;
    border-radius: 10px;
    max-width: 330px;
  }

  &__header {
    display: flex;
    align-items: center;
    margin: 30px 0;
  }

  &__icon {
    width: 73px;
    height: 72px;
    background: $white;
    border-radius: 50%;
    background-image: url("~@/assets/svg/svg-desktop.svg");

    @media (min-width: 768px) {
      background-image: url("~@/assets/svg/svg-mobile.svg");
    }
  }

  &__title {
    margin-left: 10px;
    color: $secondary-color;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }

  &__content {
    padding: 30px 50px;
    background-color: $white;
    border: 1px solid #a9d6ff;
    border-radius: 12px;
  }

  &__option {
    color: $grey-color;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  &__button {
    color: $primary-color;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    border-style: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      color: $secondary-color;
    }
  }
}
</style>
