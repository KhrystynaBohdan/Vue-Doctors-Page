<template>
  <div class="faq__top">
    <div class="faq__title">FAQ</div>
    <div class="faq__subtitle">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQTopBlock",
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/mixins";

.faq {
  &__title {
    @include title;
  }

  &__subtitle {
    @include subtitle;
  }
}
</style>
