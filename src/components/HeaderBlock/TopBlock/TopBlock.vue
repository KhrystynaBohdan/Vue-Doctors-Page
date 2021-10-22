<template>
  <div class="top-block">
    <div class="top-block__first">
      <div class="top-block__title">Meet the Best Hospital</div>
      <div class="top-block__subtitle">
        We know how large objects will act, but things on a small scale.
      </div>
      <div class="top-block__buttons">
        <button class="top-block__get">Get Quote Now</button>
        <button class="top-block__learn">Learn More</button>
      </div>
    </div>
    <HeaderForm />
  </div>
</template>

<script>
import HeaderForm from "@/components/HeaderBlock/TopBlock/HeaderForm";

export default {
  name: "TopBlock",
  components: { HeaderForm },
};
</script>

<style scoped lang="scss">
@import "../../../styles/button";
@import "../../../styles/variables";

.top-block {
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 5%;
    padding: 80px 5%;
  }

  &__first {
    padding: 0 15%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    @media (min-width: 768px) {
      padding: 0;
      max-width: 450px;
      align-items: flex-start;
    }
  }

  &__title {
    font-size: 40px;
    line-height: 55px;
    color: $white;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 58px;
      text-align: left;
      line-height: 80px;
    }
  }

  &__subtitle {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: $white;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  &__buttons {
    margin-top: 20px;
    display: flex;
    gap: 5px;
  }

  &__get {
    color: $white;
    background-color: $primary-color;
    border: 1px solid $primary-color;
    border-radius: 37px;
    padding: 10px 35px;
    font-weight: 700;
    height: 42px;

    &:hover {
      background-color: transparent;
      border: 1px solid $white;
      cursor: pointer;
    }
  }

  &__learn {
    background-color: transparent;
    border-radius: 37px;
    border: 1px solid $white;
    padding: 10px 35px;
    font-size: 14px;
    line-height: 22px;
    color: $white;
    font-weight: 700;
    height: 42px;
    font-family: Montserrat, Helvetica, Arial, sans-serif;

    &:hover {
      background-color: $primary-color;
      border: 1px solid $primary-color;
      cursor: pointer;
    }
  }
}
</style>
