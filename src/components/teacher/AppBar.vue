<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)"></v-app-bar-nav-icon>
    <v-toolbar-title>Project Registration System</v-toolbar-title>
    <v-spacer />
    <v-card rounded="5" flat class="grey lighten-4 rounded-pill"
      ><v-btn text fab disabled>
        <v-icon class="small">mdi-account</v-icon>
      </v-btn>
      <span class="mr-4">{{ this.profile }}</span>
    </v-card>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "AppBar",
  data() {
    return {
      user: this.$store.getters.getUser,
      profiles: [],
      profile: "",
    };
  },
  created: function () {
    this.$store.dispatch("settingTeacher", this.profiles);
    this.profiles.forEach((value) => {
      if (value.value === this.user) {
        this.profile = value.text;
      }
      return;
    });
  },
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