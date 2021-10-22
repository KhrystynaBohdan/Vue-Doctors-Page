<template>
  <div class="clients">
    <ClientsTopBlock />
    <ClientsCards />
  </div>
</template>

<script>
import ClientsCards from "@/components/ClientsBlock/ClientsCards";
import ClientsTopBlock from "@/components/ClientsBlock/ClientsTopBlock";

export default {
  name: "Clients",
  components: { ClientsTopBlock, ClientsCards },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.clients {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 75px 10% 30px;
  background-color: #fafafa;

  @media (min-width: 768px) {
    gap: 80px;
  }
}
</style>
