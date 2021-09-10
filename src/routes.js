import ElHeader from "./components/UI/ElHeader.vue";
// import ElCarrusel from "./components/ElCarrusel.vue";
import BandaFavorita from "./components/Bandas/BandaFavorita";
import ElForm from "./components/ElForm.vue";
import CrearBanda from "./components/Bandas/CrearBanda.vue";
import BandasGeneradas from "./components/Bandas/BandasGeneradas.vue";

export const routes = [
  { path: "/", component: ElHeader },
  {
    path: "/artistas",
    component: BandaFavorita,
    // children: [{ path: "nueva-banda", component: CrearBanda }],
  },
  { path: "/contactanos", component: ElForm },
  { path: "/nueva-banda", component: CrearBanda },
  { path: "/bandas-agregadas", component: BandasGeneradas }
];
