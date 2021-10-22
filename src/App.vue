<template>
  <HeaderBlock />
  <CardsBlock />
  <Clients />
  <FAQBlock />
  <PricingBlock />
  <GetInTouchMobileBlock />
  <GetInTouchDesktop />
  <Footer />
  <Copyright />
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock/HeaderBlock";
import CardsBlock from "@/components/CardsBlock/CardsBlock";
import Clients from "@/components/ClientsBlock/Clients";
import FAQBlock from "@/components/FAQBlock/FAQBlock";
import PricingBlock from "@/components/PricingBlock/PricingBlock";
import GetInTouchMobileBlock from "@/components/GetInTouchMobileBlock";
import GetInTouchDesktop from "@/components/GetInTouchDesktop";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default {
  name: "App",
  components: {
    Copyright,
    Footer,
    GetInTouchDesktop,
    GetInTouchMobileBlock,
    PricingBlock,
    FAQBlock,
    Clients,
    CardsBlock,
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
