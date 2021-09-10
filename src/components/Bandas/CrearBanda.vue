<template>
  <v-row>
    <v-col cols="3"></v-col>
    <v-col cols="5" align="center">
      <v-form
        @submit.prevent
        class="form-stylo"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="formRules"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="genero"
            :rules="formRules"
            label="Genero"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="integrante" label="Integrante"> </v-text-field
          ><v-btn
            color="rgb(232, 232, 204,0.5)"
            class="botonCercle"
            small
            @click="pushIntegrante"
            ><v-icon>mdi-plus</v-icon>agregar integrante</v-btn
          ><v-card flat color="rgb(232, 232, 204,0.5)"
            ><h2>Integrantes:</h2>
            <v-list-item
              @click="eliminarIntegrante(index)"
              v-for="(int, index) in integrantes"
              :key="index"
              >- {{ int }}</v-list-item
            >
          </v-card>
        </v-col>
        <v-col>
          <v-text-field
            label="Descripcion"
            :rules="formRules"
            v-model="descripcion"
          ></v-text-field>
        </v-col>

        <v-btn :disabled="!valid" class="botonCercle" @click="validate">
          Validar
        </v-btn>

        <v-btn class="botonCercle" @click="reset"> Reset Form </v-btn>
        <v-btn
          :disabled="!valid"
          type="submit"
          class="botonCercle"
          @click="submitBanda"
          >Guardar Banda</v-btn
        >
      </v-form>
    </v-col>
    <v-col cols="12" align="center">
      <router-link to="bandas-agregadas"
        ><button class="botonCercle">Ver bandas generadas</button></router-link
      >
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    name: "",
    integrante: "",
    integrantes: [],
    descripcion: "",
    genero: "",
    formRules: [(v) => !!v || "Este campo es requerido!"],
    // integrantesRules: [(integrantes) =>integrantes.length > 0 ? this.valid : "Al menos un integrante!"  ],
  }),

  methods: {
    eliminarIntegrante(index) {
      this.integrantes.splice(index, 1);
    },
    submitBanda() {
      const formData = {
        name: this.name,
        integrantes: this.integrantes,
        genero: this.genero,
        descripcion: this.descripcion,
      };
      axios
        .post(
          "https://bandas-macena-default-rtdb.firebaseio.com/bandas.json",
          formData
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      this.reset();
      this.integrantes = [];
    },
    pushIntegrante() {
      this.integrantes.push(this.integrante);
      this.integrante = "";
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped></style>
