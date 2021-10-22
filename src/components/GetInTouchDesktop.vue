<template>
  <div class="get-in-touch-desktop">
    <div class="get-in-touch-desktop__content">
      <div class="get-in-touch-desktop__title">Get In Touch</div>
      <div class="get-in-touch-desktop__subtitle">
        The gradual accumulation of information about atomic and small-scale
        behaviour during the first quarter of the 20th
      </div>
    </div>
    <div class="get-in-touch-desktop__group">
      <input
        type="text"
        autocomplete="on"
        class="get-in-touch-desktop__input"
        placeholder="Your Email"
      />
      <button class="get-in-touch-desktop__subscribe">Subscribe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInTouchDesktop",
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/button";

.get-in-touch-desktop {
  display: none;
  background-color: $secondary-color;
  padding: 80px 10%;
  gap: 15%;

  &__title {
    font-size: 40px;
    line-height: 57px;
    font-weight: 700;
    color: $white;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: $white;
  }

  &__content {
    width: 50%;
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__group {
    position: relative;
    display: flex;
    align-items: center;
    width: 50%;
  }

  &__input {
    height: 58px;
    width: 100%;
    border-style: none;
    border-radius: 5px;
    padding-left: 20px;
    color: $grey-color;
    font-size: 14px;
    line-height: 28px;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }

  &__subscribe {
    position: absolute;
    right: 0;
    top: 50%;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 28px;
    border-radius: 0 5px 5px 0;
    padding: 14px 20px;
    transform: translateY(-50%);
    cursor: pointer;
    color: $white;
    background-color: $primary-color;
    border: 1px solid $primary-color;

    &:hover {
      color: $primary-color;
      border: 1px solid $primary-color;
      background-color: transparent;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
}
</style>
