<template>
  <div class="get-in-touch-mobile">
    <div class="get-in-touch-mobile__content">
      <div class="get-in-touch-mobile__title">
        Subscribe For Latest Newsletter
      </div>
      <div class="get-in-touch-mobile__group">
        <input
          type="text"
          autocomplete="on"
          class="get-in-touch-mobile__input"
          placeholder="Your Email"
        />
        <button class="get-in-touch-mobile__subscribe button-primary">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInTouchMobileBlock",
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/button";

.get-in-touch-mobile {
  background-color: $secondary-color;
  display: flex;
  justify-content: center;
  padding: 60px 40px;

  &__content {
    max-width: 340px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: $white;
  }

  &__group {
    position: relative;
    margin-top: 30px;
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
  }

  @media (min-width: 768px) {
    display: none;
  }
}
</style>
