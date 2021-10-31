<template>
  <form class="top-block__appointment" @submit.prevent="handleSubmit">
    <div class="top-block__form-title">Book Appointment</div>
    <label>Name *</label>
    <input
      type="text"
      autocomplete="on"
      class="top-block__input"
      placeholder="Full Name"
      v-model="name"
      required
    />
    <label>Email *</label>
    <input
      type="email"
      autocomplete="on"
      class="top-block__input"
      placeholder="example@gmail.com"
      v-model="email"
      required
    />
    <label>Department *</label>
    <select
      class="top-block__select"
      tabindex="0"
      v-model="department"
      required
    >
      <option value="select">Please Select</option>
      <option value="surgery">Surgery</option>
      <option value="pediatric">Pediatric</option>
    </select>
    <label>Time *</label>
    <select class="top-block__select" tabindex="0" v-model="time" required>
      <option value="time1">4:00 Available</option>
      <option value="time2">5:00 Available</option>
      <option value="time3">6:00 Available</option>
    </select>
    <button class="top-block__submit button-primary">Book Appointment</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      department: "surgery",
      time: "time1",
    };
  },
  methods: {
    handleSubmit() {
      console.log("name: ", this.name);
      console.log("email: ", this.email);
      console.log("department: ", this.department);
      console.log("time: ", this.time);

      this.name = "";
      this.email = "";
      this.department = "";
      this.time = "";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../styles/button.scss";
@import "../../../styles/variables.scss";

.top-block {
  &__appointment {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 330px;
    background-color: $white;
    border-radius: 5px;
    padding: 40px;
  }

  input,
  select {
    width: 100%;
    padding: 12px 12px;
    border-radius: 5px;
    border: 1px solid #bdbdbd;
    background: #f9f9f9;
    color: #737373;
    font-size: 14px;
    line-height: 28px;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
  }

  input {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;
    }
  }

  select {
    appearance: none;
    outline: 0;
    background: url("~@/assets/arrows.svg") no-repeat right 20px top 50%;

    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;
    }
  }

  label {
    margin: 12px 0;
  }

  &__form-title {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: $secondary-color;
    text-align: center;
  }

  &__submit {
    margin-top: 40px;
    font-size: 14px;
  }

  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
}
</style>
