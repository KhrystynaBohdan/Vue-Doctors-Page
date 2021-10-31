<template>
  <HeaderBlock />
  <router-view />
</template>
<script>
import HeaderBlock from "@/components/HeaderBlock/HeaderBlock";

export default {
  name: "App",
  components: {
    HeaderBlock,
  },
};
</script>
<style lang="scss">
@import "./styles/variables";

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  background: $white;
}

.footer__icon,
a,
button,
select,
input {
  &:focus-visible {
    outline: 2px solid #cccaca;
    border-radius: 2px;
  }
}
</style>
