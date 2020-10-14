<template>
  <v-app>
    <v-navigation-drawer src="../../assets/blue.jpg" v-model="drawer" app expand-on-hover>
      <v-list danse color="cyan lighten-3">
        <v-list-item link to="profile">
          <v-list-item-action>
            <v-avatar size="36px">
              <v-img :src="this.profile.image"></v-img>
            </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title">{{ this.user }}</v-list-item-title>
            <v-list-item-title class="subtitle">{{ this.profile.fullname }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link to="project">
          <v-list-item-action>
            <v-icon>mdi-account-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ผลการลงทะเบียน</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="select" v-if="this.selectProject != false">
          <v-list-item-action>
            <v-icon>mdi-account-search-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>เลือกอาจารย์ที่ปรึกษา</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="teacher">
          <v-list-item-action>
            <v-icon>mdi-account-search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ข้อมูลอาจารย์ที่ปรึกษา</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="notifications" @click="ChangeStatus">
          <v-list-item-action>
            <v-badge color="red" overlap>
              <template v-slot:badge>
                <span v-if="noticeStatus[0].status == true">!</span>
              </template>
              <v-icon>mdi-email</v-icon>
            </v-badge>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ประกาศข่าว</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-container>
        <h6 class="title" align="center">ระบบ</h6>
      </v-container>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link replace @click="logOut">
          <v-list-item-action>
            <v-icon>mdi-account-off</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ออกจากระบบ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
      <v-app-bar-nav-icon v-on:click="drawer = (!drawer)"></v-app-bar-nav-icon>
      <v-toolbar-title>Project Registration System</v-toolbar-title>
      <v-row class="pa-5">
        <v-list-item
          link
          to="notifications"
          @click="ChangeStatus"
          v-if="noticeStatus[0].status == true"
        >
          <v-list-item-action>
            <v-badge color="red" overlap>
              <template v-slot:badge>
                <v-icon v-if="noticeStatus[0].status == true"
                  >mdi-message-text</v-icon
                >
              </template>
              <v-icon>mdi-email</v-icon>
            </v-badge>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ประกาศข่าวใหม่</v-list-item-title>
          </v-list-item-content>
        </v-list-item> </v-row
      ><v-spacer />
      <v-card rounded="5" flat class="grey lighten-4 rounded-pill"
        ><v-btn text fab disabled>
          <v-icon class="small">mdi-account</v-icon>
        </v-btn>
        <span class="mr-4">{{ this.profile.fullname }}</span>
      </v-card>
    </v-app-bar>

    <v-content class="grey lighten-5">
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
// eslint-disable-next-line no-unused-vars
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      drawer: true,
      //messages: 2,
      noticeStatus: [],
      profile: {},
      profiles: [],
      user: this.$store.getters.getUser,
      selectProject: true
    };
  },
  methods: {
    ChangeStatus: function () {
      this.noticeStatus[0].status = false;
      firebase.database().ref("noticeStatus/").child(this.user).update({
        status: false,
      });
    },
    logOut: function () {
      this.$store.commit("logOut");
      // window.sessionStorage.clear();
      this.$router.push("/home");
    },
  },
  created() {
    console.log("Dashboard Created !!");
    this.$store.dispatch("settingStudent", this.profiles);

    this.profiles.forEach((value) => {
      if (value.id === this.user) {
        this.profile = {
          fullname: value.prefix + " " + value.firstname + " " + value.lastname,
          gpax: value.gpax,
          year: value.year,
          image: value.image,
        };
        return;
      }
    });

    firebase
      .database()
      .ref("noticeStatus")
      .on("child_added", (snapshot) => {
        if (snapshot.key == this.user) {
          this.noticeStatus.push({
            id: snapshot.key,
            ...snapshot.val(),
          });
          console.log(this.noticeStatus);
        }
      });

    firebase
      .database()
      .ref(
        "lecturer_register/" + this.profile.year + "/" + this.user
      )
      .on("child_added", (snapshot) => {
        if (snapshot.key != null) {
          this.selectProject = false;
          this.$router.replace({
            path: "/student/" + this.user + "/project",
          });
        }
      });
  },
};
</script>
