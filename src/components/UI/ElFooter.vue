<template>
  <v-footer padless dark class="footer">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Macena Music</strong>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      headerLogo: require("../../assets/MACENAMUSICLOGO.png"),
    };
  },
};
</script>
<style scoped>
.footer {
  position: fixed;
  
  margin-top: 100px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: rgba(231, 233, 127, 0.308);
  text-align: center;
}
</style>
