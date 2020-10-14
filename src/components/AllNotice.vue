<template>
  <v-app>
    <AppBar></AppBar>
    <!-- Sizes your content based upon application components -->
    <v-content class="grey lighten-5">
      <v-container fluid row px-6 py-6>
        <h4 class="display-1">ประกาศข่าวทั้งหมด</h4>
        <v-spacer></v-spacer>
        <router-link link to="home">ย้อนกลับ</router-link>
      </v-container>
      <v-container fluid dense v-for="(message, i) in notices" :key="i">
        <v-layout justify-center align-center>
          <v-card width="1000">
            <!-- color="#ffe4c4" -->
            <v-card-title>{{ message.title }}</v-card-title>
            <v-card-text> &emsp;&emsp;{{ message.information }} </v-card-text>
            <v-layout v-if="message.imageUrl != ''" justify-center>
              <v-img
                :src="message.imageUrl"
                :lazy-src="message.imageUrl"
                class="grey lighten-2;"
                max-width="60%"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-layout>
            <v-layout px-5 py-5 justify-end v-text="message.date"> </v-layout>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>>

<script>
import AppBar from "./AppBar";
export default {
  name: "AllNotice",
  components: {
    AppBar,
  },
  data() {
    return {
      drawer: null,
      notices: [],
    };
  },
  created() {
    this.$store.dispatch("showNotice", this.notices);
    // eslint-disable-next-line
    console.log(this.notice);
  },
};
</script>
