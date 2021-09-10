<template>
  <v-container fluid>
    <v-row align-content="center">
      <v-col cols="5" md="2">
        <v-img :src="headerLogo" height="100px" width="auto"> </v-img>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="1">
        <!-- <a class="botonCercle" href="#banda-favorita"> Bandas </a> -->
        <router-link class="botonCercle" to="/artistas"> Artistas </router-link>
      </v-col>
      <v-col cols="1">
        <!-- <a class="botonCercle" href="#contactanos"> Contacto </a> -->
        <router-link class="botonCercle" to="/contactanos"> Contacto </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headerLogo: require("../../assets/MACENAMUSICLOGO.png"),
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

.botonCercle {
  font-size: 1.5rem;
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.8);
  max-width: 100%;

  background-color: transparent;
  cursor: pointer;
}
</style>
