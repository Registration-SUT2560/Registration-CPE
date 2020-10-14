<template>
  <v-navigation-drawer
    src="../../assets/blue.jpg"
    v-model="drawer"
    app
    expand-on-hover
  >
    <v-list danse>
      <v-list-item link to="profile">
        <v-list-item-action>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>โปรไฟล์</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item link to="notice">
        <v-list-item-action>
          <v-icon>mdi-bulletin-board</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>ประกาศ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="reg">
        <v-list-item-action>
          <v-icon>mdi-calendar-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>ข้อมูลปีการศึกษา</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item link v-on:click="logOut">
        <v-list-item-action>
          <v-icon>mdi-account-off</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>ออกจากระบบ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "drawerTeacher",
  methods: {
    logOut: function () {
      this.$store.commit("logOut");
      // window.sessionStorage.clear();
      this.$router.push("/home");
    },
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawer", val);
      },
    },
  },
};
</script>

<style>
</style>