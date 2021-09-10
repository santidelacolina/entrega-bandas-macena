<template>
  <v-card class="mx-auto" max-width="100%" color="rgb(0, 0, 0, 0.0)" flat>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-card-title>
          <h1 class="titulo" color="rgb(0, 0, 0, 0.0)">
            Bandas pedidas por nuestros usuarios
          </h1>
        </v-card-title>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(banda, index) in bandasGeneradas"
        :key="index"
        cols="4"
        align="center"
      >
        <v-expansion-panels color="rgb(232, 232, 204,0.5)">
          <v-card
            style="text-align: center"
            color="rgb(232, 232, 204,0.5)"
            class="carta-banda"
          >
            <v-col>
              <v-btn class="botonCercle" @click="borrarBanda(index)"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
              <v-btn class="botonCercle" @click="editarBanda(index)"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
            </v-col>
            <v-card-title id="nombre-banda">
              <h4 style="color: white">{{ banda.name }}</h4>
            </v-card-title>
            <v-card-title>Genero: {{ banda.genero }}</v-card-title>
            <v-expansion-panel color="rgb(232, 232, 204,0.5)">
              <v-expansion-panel-header color="rgb(232, 232, 204,0.5)">
                Integrantes
              </v-expansion-panel-header>
              <v-item v-for="(artista, i) in banda.integrantes" :key="i">
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
                <p id="info-banda">{{ banda.descripcion }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-expansion-panels>
      </v-col>
      <v-col cols="5"></v-col>
      <v-col cols="2">
        <router-view></router-view>
        <router-link to="/nueva-banda">
          <v-btn x-large
            ><v-icon x-large>mdi-plus-circle-outline</v-icon>agregar
            banda</v-btn
          >
        </router-link>
      </v-col>
      <v-col cols="5">
        <v-btn @click="getBandas" v-if="!mostrarBandas">Mostrar Bandas</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mostrarBandas: false,
      bandasGeneradas: [],
      bandaGenerada: { name: "", descripcion: "", integrantes: [], genero: "" },
    };
  },

  methods: {
    editarBanda() {},
    borrarBanda(index) {
      this.bandasGeneradas.splice(index, 1);
      axios
        .put(
          "https://bandas-macena-default-rtdb.firebaseio.com/bandas.json",
          this.bandasGeneradas
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
    getBandas() {
      axios
        .get("https://bandas-macena-default-rtdb.firebaseio.com/bandas.json")
        .then((res) => {
          const data = res.data;
          const bandas = [];
          for (let key in data) {
            const banda = data[key];
            banda.id = key;
            bandas.push(banda);
            this.bandaGenerada = banda;
            this.bandasGeneradas.push(this.bandaGenerada);
            // for(let b in bandas){
            //     this.bandaGenerada.name= b.name
            //     this.bandaGenerada.descripcion= b.descripcion
            //     this.bandaGenerada.integrantes= b.integrantes
            //     this.bandaGenerada.genero= b.genero
            // }
          }
          console.log(this.bandasGeneradas);
        })
        .catch((error) => console.log(error));
      this.mostrarBandas = true;
      
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
}

#info-banda {
  font-size: 1rem;
}
</style>
