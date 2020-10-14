<template>
  <v-container>
    <v-container row>
      <v-spacer></v-spacer>
      <h4 class="display-1">ประกาศข่าว</h4>
      <v-spacer></v-spacer>
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
                <v-row class="fill-height ma-0" align="center" justify="center">
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      notices: [],
    };
  },
  created() {
    this.$store.dispatch("showNotice", this.notices);
  },
};
</script>
