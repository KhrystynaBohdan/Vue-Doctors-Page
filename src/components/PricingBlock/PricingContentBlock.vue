<template>
  <div class="pricing__content">
    <div class="pricing__title">Pricing</div>
    <div class="pricing__subtitle">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingContentBlock",
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.pricing {
  &__content {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 40px;
    line-height: 57px;
    font-weight: 700;
    color: $secondary-color;
    text-align: center;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $grey-color;
    text-align: center;
    max-width: 470px;
  }
}
</style>
