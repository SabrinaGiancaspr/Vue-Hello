// console.log(Vue);

// creo una costante e assegno la funzione Vue.createApp
// createApp è un oggetto JavaScript che definisce Vue.
// data che restituisce un oggetto con proprietà message
const createApp = Vue.createApp;
createApp({
  data() {
    return {
      message: 'Madame ti amo',
    };
  },
}).mount('#app');
