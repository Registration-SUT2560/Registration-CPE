<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)"></v-app-bar-nav-icon>
    <v-toolbar-title>Project Registration System</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "AppBar",
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "setDrawer",
    }),
  },
};
</script>

<style>
</style>