import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

import VuejsonToCsv from "vue-json-to-csv";
import vueXlsxTable from "vue-xlsx-table";
Vue.use(vueXlsxTable, { rABS: false });
Vue.use(VuejsonToCsv);

import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCV_CUBsnEI028O4nJgjdQejYj7FW9JimQ",
  authDomain: "registrationcpe.firebaseapp.com",
  databaseURL: "https://registrationcpe.firebaseio.com",
  projectId: "registrationcpe",
  storageBucket: "registrationcpe.appspot.com",
  messagingSenderId: "300542687172",
  appId: "1:300542687172:web:6b6135a1a338c101afd691",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
