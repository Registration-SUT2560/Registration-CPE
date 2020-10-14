<template>
  <v-app>
    <AppBar></AppBar>
    <Drawer></Drawer>
    <v-content class="grey lighten-5">
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./AppBar";
import Drawer from "./Drawer"
export default {
  components: {
    AppBar,
    Drawer
  },
  data() {
    return {
    };
  },
};
</script>
