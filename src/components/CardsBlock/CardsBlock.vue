<template>
  <div class="cards">
    <CardsTopBlock />
    <CardsContainer />
  </div>
</template>

<script>
import CardsTopBlock from "@/components/CardsBlock/CardsTopBlock";
import CardsContainer from "@/components/CardsBlock/CardsContainer";

export default {
  name: "CardsBlock",
  components: { CardsContainer, CardsTopBlock },
};
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 10%;
}
</style>
