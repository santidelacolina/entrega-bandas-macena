<!-- Crear landing page agencia de bandas // pasos para crear el proyecto: // -
node js // - vue cli // - crear un proyecto VUE 2 // - instalar vuetify //
landingpage // utilizar componentes: // header // carrusel // bandas -> cards
contacto // input-> text field y text area // al enviar limpiar los campos y
mostrar un snackbar de exito // footer // utilizar anclas en el header para
hacer scroll hasta la seccion indicada en el btn // crear una carpeta assets:
ahi se guardan las imagenes, iconos, fondos, tipografias. -->
<template>
  <v-container fluid ma-0 pa-0 class="contenedor">
    <router-view></router-view>
    <div id="divHome">
      <router-link to="/"
        ><v-icon x-large dark>mdi-home-circle</v-icon></router-link
      >
    </div>
    <el-carrusel></el-carrusel>
    <footer>
      <el-footer></el-footer>
    </footer>
    <!-- <el-header></el-header>

      <banda-favorita > </banda-favorita>
      <el-form ></el-form>
    
    <footer>
      <h4><a href="#fondo">#</a>Fondo</h4>
    </footer> -->
  </v-container>
</template>

<script>
import ElCarrusel from "./components/ElCarrusel.vue";
import ElFooter from './components/UI/ElFooter.vue'
export default {
  components: { ElCarrusel, ElFooter },
  data() {
    return {};
  },
  // created() {
  //   this.$store.dispatch("initBandas");
  // },
};
</script>
<style>
.body {
  width: 100%;
  margin: 0;
  display: block;
}
.transparente {
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);
}
.contenedor {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  position: absolute;
  color: rgb(255, 255, 255);
  /* width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0; */
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.4);

  z-index: 10;
}
#divHome {
  position: fixed;
  right: 16px;
  z-index: 99;
  display: flex;
  bottom: 44px;
  opacity: 1;
  transition-property: opacity, bottom;
  transition-duration: 300ms;
}
#botonHome {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  height: 32px;
  padding: 0px 12px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgb(52, 52, 52);
  color: rgb(255, 255, 255);
  background-color: rgb(21, 21, 21);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
