<template>
  <header class="center-align">
    <img src="../images/scott-webb-244457-unsplash.jpg">
    <p class="header">My Journey</p>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style>
header img {
  margin: 0px;
  max-width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.header {
  font-family: 'Architects Daughter', cursive;
  font-size: 3rem;
  margin: 10px;
  }
</style>