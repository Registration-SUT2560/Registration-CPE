import Vue from "vue";
import Vuex from "vuex";

import { state } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

import createPersistedState from "vuex-persistedstate";
// import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [createPersistedState()]
});
