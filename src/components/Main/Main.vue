<template>
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
import CardsBlock from "@/components/CardsBlock/CardsBlock";
import FAQBlock from "@/components/FAQBlock/FAQBlock";
import PricingBlock from "@/components/PricingBlock/PricingBlock";
import GetInTouchMobileBlock from "@/components/GetInTouchMobileBlock";
import GetInTouchDesktop from "@/components/GetInTouchDesktop";
import Copyright from "@/components/Copyright";
import Clients from "@/components/ClientsBlock/Clients";

export default {
  name: "Main",
  components: {
    CardsBlock,
    Clients,
    FAQBlock,
    PricingBlock,
    GetInTouchMobileBlock,
    GetInTouchDesktop,
    Copyright,
  }
};
</script>

<style scoped>

</style>
