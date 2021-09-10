<template>
  <v-card class="mx-auto" max-width="100%" color="rgb(0, 0, 0, 0.0)" flat>
    <v-row>
      <v-col cols="4" ></v-col>
      <v-col cols="4" >
        <v-card-title >
          <h1 class="titulo" color="rgb(0, 0, 0, 0.0)" >
            Nuestras Bandas
          </h1>
        </v-card-title>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>

    <v-row>
      <v-col v-for="(banda, i) in bandas" :key="i" cols="3" md="6">
        <v-expansion-panels >
          <v-card style="text-align:justify; max-width:39%" color="rgb(0, 0, 0, 0.0)" >
            <v-col>
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
              <v-item v-for="(artista, index) in banda.artistas" :key="index">
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
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bandas: [
        {
          nombre: "A Tribe Called Quest",
          artistas: [
            "Kamal Fareed 'Q-Tip'",
            "Malik Taylor 'Phife Dawg'",
            "Ali Shaheed Muhammad",
            "Jarobi White",
          ],
          info: "Fue un grupo de hip hop estadounidense, originalmente formado en Queens, Nueva York, en 1985.El grupo estaba originalmente conformado por el rapero y productor Q-Tip (Kamal Fareed), el rapero Phife Dawg (Malik Taylor), el Dj y coproductor Ali Shaheed Muhammad. El cuarto miembro Jarobi White, solo estuvo presente en el primer disco y dejó el grupo en 1991. Año en el cual más tarde el grupo lanzaría su segundo álbum influenciado por el jazz The Low End Theory, considerado por moldear el hip hop alternativo de los años 1990.2​ El grupo se caracterizó por una fuerte impronta artística, además de una cierta actitud bohemia en comparación a otras agrupaciones contemporáneas del género.",
          logo: require("../assets/a-tribe-called-quest-logo.jpg"),
        },
        {
          nombre: "Patricio Rey y sus Redonditos de Ricota",
          artistas: [
            "Indio Solari",
            "Skay Beilinson",
            "Willy Crook",
            "Sergio Dawi",
            "Walter Sidotti",
            "Fernando 'Semilla' Bucciarelli",
          ],
          info: "También conocidos como Los Redondos, fue una banda de rock de La Plata (Argentina) considerada como una de las más importantes e influyentes de su país. Se formó en 19761​ y, aunque a lo largo de su historia contó en sus filas con varios integrantes, siempre tuvo como líderes centrales a Indio Solari como cantante y letrista, Skay Beilinson como guitarrista y compositor",
          logo: require("../assets/los-redondos-logo.jpg"),
        },
        {
          nombre: "Ayax y Prok",
          artistas: ["Ayax Pedrosa", "Adrian Pedrosa"],
          info: "Ayax y Adrián, naturales de Granada, nacieron en el 1991, son hermanos gemelos componen un duo de artistas granadinos, criados en el barrio del Albayzín, y han escrito rap desde hace más de una década. Desde chicos desarrollaron un gran interés por el saber y la composición poética, también por las artes plásticas tales como la pintura y el dibujo. ",
          logo: require("../assets/ayax-prok-logo.jpg"),
        },
        {
          nombre: "Tale of Us",
          artistas: ["Matteo Milleri", "Carmine Conte"],
          info: "Tale of Us es un dúo de DJs y productores integrados por los italianos Matteo Milleri y Carmine Conte. Ambos comparten una visión particular de la música electrónica que reúne elementos del techno y del house, para mezclarlos con pop, disco o rock. Sus producciones, siempre reconocibles, pueden ir desde la pista de baile al salón de casa, con composiciones más abstractas.",
          logo: require("../assets/tale-of-us-logo.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.titulo{
  font-size: 2rem;
  margin-top: 50%;
  margin-bottom: 15%;
  padding-left: 18%;
  color: white;
  
}
#nombre-banda {
  font-size: 1.1rem;
}
.carta-banda {
  background-color: olive;
}

#info-banda {
  font-size: 1rem;
}
</style>
