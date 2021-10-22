<template>
  <div class="faq">
    <FAQTopBlock />
    <FAQContainer />
  </div>
</template>

<script>
import FAQContainer from "@/components/FAQBlock/FAQContainer";
import FAQTopBlock from "@/components/FAQBlock/FAQTopBlock";

export default {
  name: "FAQBlock",
  components: { FAQTopBlock, FAQContainer },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px 10%;
  background-color: #fafafa;
  gap: 60px;
  @media (min-width: 768px) {
    gap: 80px;
  }
}
</style>
