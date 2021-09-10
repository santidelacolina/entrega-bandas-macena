<template>
  <v-row>
    <v-col cols="2"></v-col>
    <v-card color="rgb(0, 0, 0, 0.0)" flat>
      <v-col cols="5"></v-col>
      <v-col
        ><v-card-title id="contactanos">
          <h2 style="color: white">Contactanos</h2>
        </v-card-title></v-col
      >
      <v-col cols="5"></v-col>

      <v-form id="formulario" @submit.prevent="sendEmail">
        <v-container fluid>
          <v-row>
            <v-col cols="6" md="6">
              <v-text-field
                v-model="name"
                name="name"
                :error-messages="nameErrors"
                label=" Nombre"
                required
                class="form-stylo"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label=" E-mail"
                name="email"
                required
                class="form-stylo"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="comentarios"
                :error-messages="comentariosErrors"
                :counter="10"
                class="form-stylo"
                name="message"
                label=" Comentarios extras"
                required
                @input="$v.comentarios.$touch()"
                @blur="$v.comentarios.$touch()"
              ></v-textarea>
            </v-col>
            <v-col cols="3"> </v-col>
            <v-col cols="3">
              <button type="submit" class="botonCercle" @click="sendEmail"> Enviar </button>
            </v-col>
            <v-col cols="3">
              <button @click="clear" class="botonCercle"> Limpiar campos </button>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-container>
        <v-snackbar
          v-model="snackbar.visible"
          
          color="#00E676"
          :multi-line="snackbar.mode === 'multi-line'"
          :top="snackbar.position === 'top'"
        >
          <v-layout pr-4>
            <v-icon class="pr-3" dark left>{{ snackbar.icon }}</v-icon>
            <v-layout align-center column>
              <div>
                <strong>
                  {{ snackbar.title }}
                </strong>
              </div>
              <div>{{ snackbar.text }}</div>
            </v-layout>
          </v-layout>

          <v-btn text @click="clear"> Cerrar </v-btn>
        </v-snackbar>
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
import emailjs from 'emailjs-com';
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    comentarios: { required, minLength: minLength(10) },
  },

  data: () => ({
    name: "",
    email: "",
    comentarios: "",
    banderaSnack: false,

    snackbar: {
      color: "success",
      icon: "mdi-check-circle",
      mode: "multi-line",
      position: "top",
      title: "Gracias!",
      text: "Tu comentario fue enviado.",
      visible: false,
    },
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("El nombre es requerido!");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Tiene que ser un email valido");
      !this.$v.email.required && errors.push("El email es requerido!");
      return errors;
    },
    comentariosErrors() {
      const errors = [];
      if (!this.$v.comentarios.$dirty) return errors;
      !this.$v.comentarios.required &&
        errors.push("Por favor, agrega un comentario");
      !this.$v.comentarios.minLength &&
        errors.push("Debes escribir al menos 10 caracteres");
      // banderaCheck(errors)
      return errors;
    },
  },

  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "gmail",
          "template_l7flt82",
          e.target,
          "user_2Njerz1pq4fQTIuc03iuZ"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
        e.target.reset();
    },
    banderaCheck(array) {
      if (array.length === 0) {
        this.banderaSnack = true;
      } else {
        this.banderaSnack = false;
      }
      return this.banderaSnack;
    },
    submit() {
      this.$v.$touch();

      this.snackbar.visible = true;
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.comentarios = "";
      this.snackbar.visible = false;
    },
  },
};
</script>

<style>
#contactanos {
  padding-left: 0%;
}
.form-stylo {
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  position: relative;
  border-radius: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  font-weight: 300;
  text-decoration-color: antiquewhite;
}
.form-stylo input {
  color: rgba(255, 255, 255, 0.712);
  font-size: 1.5rem;
}
.form-stylo label {
  font-size: 1.2rem;
}
.form-stylo error-message {
  font-size: 2rem;
}
</style>
