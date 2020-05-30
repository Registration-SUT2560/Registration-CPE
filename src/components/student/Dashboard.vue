<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list danse>
        <v-list-item link to="profile">
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ this.user }}</v-list-item-title>
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
        <v-list-item link to="select" v-if="getCheckShow.status != false">
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
        <h6 class="title">ระบบ</h6>
      </v-container>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link replace to="slogin">
          <v-list-item-action>
            <v-icon>mdi-account-off</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ออกจากระบบ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
        </v-list-item>
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
            <v-card>
              <v-card-title
                >{{ getCheckShow.status }} {{ checkShow }}</v-card-title
              >
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      drawer: null,
      //messages: 2,
      noticeStatus: [],
      profiles: [],
      result: {},
      user: this.$store.getters.getUser.data,
      checkShow: [],
      getCheckShow: {},
      show: null,
    };
  },
  methods: {
    ChangeStatus: function() {
      this.noticeStatus[0].status = false;
      firebase
        .database()
        .ref("noticeStatus/")
        .child(this.user)
        .update({
          status: false,
        });
    },
  },
  created() {
    console.log("Dashboard Created !!");
    this.$store.dispatch("settingStudent", this.profiles);

    for (let i = 0; i < this.profiles.length; i++) {
      if (this.user === this.profiles[i].id) {
        this.result = this.profiles[i];
        break;
      }
    }

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
      .ref("lecturer_register/" + this.result.year)
      .on("child_added", (snapshot) => {
        if (snapshot.key === this.user) {
          this.checkShow.push({
            id: snapshot.key,
            ...snapshot.val(),
          });
          console.log(this.checkShow);
        }
      });
  },
  watch: {
    checkShow: function() {
      this.checkShow.forEach((snapshot) => {
        if (snapshot.id === this.user) {
          this.getCheckShow = {
            id: snapshot.id,
            status: snapshot.status,
          };
        }
      });
      if (this.getCheckShow.status === false) {
        setTimeout(() => {
          this.$router.replace({
            path: "/student/" + this.getCheckShow.id + "/project",
          });
        }, 800);
      }
    },
  },
};
</script>
