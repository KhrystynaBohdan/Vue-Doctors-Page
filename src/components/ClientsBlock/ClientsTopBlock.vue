<template>
  <div class="clients__top">
    <div class="clients__top-title">What Clients Say</div>
    <div class="clients__top-subtitle">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientsTopBlock",
};
</script>

<style scoped lang="scss">
@import "src/styles/button";
@import "src/styles/variables";
@import "src/styles/mixins";

.clients {
  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__top-title {
    @include title;
  }

  &__top-subtitle {
    @include subtitle;
  }
}
</style>
