<template>
  <div class="pricing">
    <PricingContentBlock />
    <PricingContainerBlock />
  </div>
</template>

<script>
import PricingContainerBlock from "@/components/PricingBlock/PricingContainerBlock";
import PricingContentBlock from "@/components/PricingBlock/PricingContentBlock";

export default {
  name: "PricingBlock",
  components: { PricingContentBlock, PricingContainerBlock },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  background-color: #fafafa;
  gap: 60px;
  padding-bottom: 90px;
  @media (min-width: 768px) {
    gap: 80px;
  }
}
</style>
