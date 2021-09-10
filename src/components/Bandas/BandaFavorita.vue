<template>
  <v-card class="mx-auto" max-width="100%" color="rgb(0, 0, 0, 0.0)" flat>
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-card-title>
          <h1 class="titulo" color="rgb(0, 0, 0, 0.0)">Nuestras Bandas</h1>
        </v-card-title>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>

    <v-row>
      <v-col v-for="(banda, index) in bandas" :key="index" cols="3" md="6">
        <v-expansion-panels color="rgb(0, 0, 0, 0.5)">
          <v-card
            style="text-align: justify; max-width: 39%"
            color="rgb(0, 0, 0, 0.0)"
            class="carta-banda"
          >
            <v-col>
              <v-btn color="red" @click="borrarBanda(index)"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
              <v-img
                :src="banda.logo"
                height="300px"
                width="300px"
                position="center"
              >
              </v-img>
            </v-col>
            <v-card-title id="nombre-banda">
              <h4 style="color: white">{{ banda.nombre }}</h4>
            </v-card-title>
            <v-expansion-panel>
              <v-expansion-panel-header> Integrantes </v-expansion-panel-header>
              <v-item v-for="(artista, i) in banda.artistas" :key="i">
                <v-expansion-panel-content style="font-size: 1rem">
                  {{ artista }}
                </v-expansion-panel-content>
              </v-item>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                Info sobre la banda
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p id="info-banda">{{ banda.info }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-expansion-panels>
      </v-col>
      <v-col cols="5"></v-col>
      <v-col cols="12" align="center" >
        <router-view></router-view>
        <router-link to="/nueva-banda">
          <button x-large class="botonCercle"
            ><v-icon x-large>mdi-plus-circle-outline</v-icon>AGREGAR BANDA
            </button
          >
        </router-link>
        <router-link to="bandas-agregadas"><button class="botonCercle">VER BANDAS GENERADAS</button></router-link>
      </v-col>
      <v-col cols="5"></v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  methods: {
    borrarBanda(index) {
      this.bandas.splice(index, 1);
    },
  },
  computed: {
    bandas() {
      return this.$store.getters.bandas;
    },
  },
};
</script>

<style>
.titulo {
  font-size: 2rem;
  margin-top: 10%;
  margin-bottom: 15%;
  padding-left: 18%;
  color: white;
}
#nombre-banda {
  font-size: 1.1rem;
}
.carta-banda {
  margin-bottom: 10%;
  position:sticky
}

#info-banda {
  font-size: 1rem;
}
</style>
