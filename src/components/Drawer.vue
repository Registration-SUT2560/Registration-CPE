<template>
  <v-navigation-drawer v-model="drawer" app src="../assets/blue.jpg">
    <v-container>
      <h6 class="title" align="center">เข้าสู่ระบบ</h6>
    </v-container>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item link v-on:click="dialog = !dialog">
        <v-list-item-action>
          <v-icon>mdi-account-box</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>สำหรับนักศึกษา</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card flat class="elevation-12">
          <v-img src="../assets/blue.jpg" height="15px"></v-img>
          <v-card-title>
            <span class="headline">Login Student</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="รหัสนักศึกษา"
                name="login"
                type="text"
                v-model="userStudent.username"
              ></v-text-field>

              <v-text-field
                id="password"
                label="รหัสผ่าน"
                name="password"
                type="password"
                v-model="userStudent.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="clearFormStudent()">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click.prevent="loginStudent">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-list-item link v-on:click="dialog1 = !dialog1">
        <v-list-item-action>
          <v-icon>mdi-account-box</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>สำหรับอาจารย์</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-dialog v-model="dialog1" persistent max-width="600px">
        <v-card flat class="elevation-12">
          <v-img src="../assets/blue.jpg" height="15px"></v-img>
          <v-card-title>
            <span class="headline">Login Teacher</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="รหัสนักศึกษา"
                name="login"
                type="text"
                v-model="userTeacher.username"
              ></v-text-field>

              <v-text-field
                id="password"
                label="รหัสผ่าน"
                name="password"
                type="password"
                v-model="userTeacher.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="clearFormTeacher()">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click.prevent="loginTeacher">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState } from "vuex";
export default {
  name: "Drawer",
  data() {
    return {
      dialog: false,
      dialog1: false,
      userStudent: {
        username: null,
        password: null,
      },
      userTeacher: {
        username: null,
        password: null,
      },
      user: this.$store.getters.getUser,
      item: 1,
      items: [
        { text: "สำหรับนักศึกษา", icon: "mdi-account-box" },
        { text: "สำหรับอาจารย์", icon: "mdi-account-box" },
      ],
    };
  },
  methods: {
    loginStudent: function () {
      this.$store.dispatch("loginStudent", this.userStudent);
    },
    loginTeacher: function () {
      this.$store.dispatch("loginTeacher", this.userTeacher);
    },
    clearFormStudent: function () {
      this.userStudent.username = null;
      this.userStudent.password = null;
      this.dialog = false;
    },
    clearFormTeacher: function () {
      this.userTeacher.username = null;
      this.userTeacher.password = null;
      this.dialog1 = false;
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