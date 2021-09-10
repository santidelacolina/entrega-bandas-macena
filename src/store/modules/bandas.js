const state = {
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
      logo: require("../../assets/a-tribe-called-quest-logo.jpg"),
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
      logo: require("../../assets/los-redondos-logo.jpg"),
    },
    {
      nombre: "Ayax y Prok",
      artistas: ["Ayax Pedrosa", "Adrian Pedrosa"],
      info: "Ayax y Adrián, naturales de Granada, nacieron en el 1991, son hermanos gemelos componen un duo de artistas granadinos, criados en el barrio del Albayzín, y han escrito rap desde hace más de una década. Desde chicos desarrollaron un gran interés por el saber y la composición poética, también por las artes plásticas tales como la pintura y el dibujo. ",
      logo: require("../../assets/ayax-prok-logo.jpg"),
    },
    {
      nombre: "Tale of Us",
      artistas: ["Matteo Milleri", "Carmine Conte"],
      info: "Tale of Us es un dúo de DJs y productores integrados por los italianos Matteo Milleri y Carmine Conte. Ambos comparten una visión particular de la música electrónica que reúne elementos del techno y del house, para mezclarlos con pop, disco o rock. Sus producciones, siempre reconocibles, pueden ir desde la pista de baile al salón de casa, con composiciones más abstractas.",
      logo: require("../../assets/tale-of-us-logo.jpg"),
    },
  ],
};
const mutations = {
  changeName: (state, payload) => {
    state.nombre = payload;
  },
  changeInfo: (state, payload) => {
    state.info = payload;
  },
};
const actions = {
  changeName({ commit }, payload) {
    commit("changeName", payload);
  },
  changeInfo({ commit }, payload) {
    commit("changeInfo", payload);
  },
};
const getters = {
  bandas: (state) => {
    return state.bandas;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
