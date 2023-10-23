// console.log(Vue);

// creo una costante e assegno la funzione Vue.createApp
// createApp è un oggetto JavaScript che definisce Vue.
// data che restituisce un oggetto con proprietà message
const createApp = Vue.createApp;
createApp({
  data() {
    return {
      message: 'Madame ti amo',
      image: 'https://media-assets.vanityfair.it/photos/6534d8df2443ab125f4cd7b6/master/w_1600%2Cc_limit/GettyImages-1749043299.jpg',
    };
  },
}).mount('#app');
