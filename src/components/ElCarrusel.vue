<template>
  
    <v-carousel
      id="carrusel"
      :show-arrows="false"
      hide-delimiters
      :cycle="true"
      interval="5000"
      height="100%"
      
    >
      <!-- hacer que la lista de integrantes sea desplegable para que las card no se desajusten -->
      
        <v-carousel-item
          id="imagenCarousel"
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          transition="fade-transition"
          >
          <!-- <h3>{{ item.artista }}</h3> -->
        </v-carousel-item>
     
          <div class="image-overlay"></div>
    </v-carousel>
  
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/A-tribe-called-quest-carrusel.jpg"),
          artista: "A Tribe Called Quest",
        },
        {
          src: require("../assets/los-redondos-carrusel.jpg"),
          artista: "Patricio Rey y sus Redonditos de Ricota",
        },
        {
          src: require("../assets/ayax-prok-carrusel.jpg"),
          artista: "Ayax y Prok",
        },
        {
          src: require("../assets/tale-of-us-carrusel.jpg"),
          artista: "Tale of Us",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-overlay {
  height: 10000px;
  width: 10000px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.45);
}
#imagenCarousel {
  background: rgba(0, 0, 0, 0.4);
}
#carrusel {
  color: "rgb(0, 0, 0, 0)";
  left: 0px;
  top: 0px;
  bottom: 0;
  right: 0;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  height: 300%;
  width: auto;
  z-index: -999999;
  position: fixed;
}
h3 {
  text-align: center;
  font-size: 20;
  color: rgb(204, 174, 174);
  background-color: rgba(0, 0, 0, 0.719);
  max-width: max-content;
}
</style>
