<template>
  <div class="copyright">
    <div class="copyright__text">
      Made With Love By Figmaland All Right Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "Copyright",
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.copyright {
  background: #fafafa;
  padding: 25px;
  text-align: center;

  &__text {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: $grey-color;
  }
}
</style>
