<template>
  <div class="cards__top">
    <div class="cards__top-title">Leading Medicine</div>
    <div class="cards__top-subtitle">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsTopBlock",
};
</script>

<style scoped lang="scss">
@import "src/styles/button";
@import "src/styles/variables";
@import "src/styles/mixins";

.cards {
  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 45px 0;
  }

  &__top-title {
    @include title;
  }

  &__top-subtitle {
    @include subtitle;
  }
}
</style>
