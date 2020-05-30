<template>
  <v-app>
    <Alert
      :open="success"
      topic="แจ้งเตือน"
      desc="เข้าสู่ระบบสำเร็จ"
      :callback="() => (this.success = false)"
    />
    <Alert
      :open="fail"
      topic="แจ้งเตือน"
      desc="เข้าสู่ระบบไม่สำเร็จ"
      :callback="() => (this.fail = false)"
    />
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title
                  >สำหรับอาจารย์ {{ user.username }}</v-toolbar-title
                >
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="รหัสอาจารย์"
                    name="login"
                    type="text"
                    v-model="user.username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="รหัสผ่าน"
                    name="password"
                    type="password"
                    v-model="user.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn text replace to="/home">กลับ</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="login(user)"
                  >เข้าสู่ระบบ</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Alert from "./Alert";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      profiles: [],
      teacher: {},
      success: false,
      fail: false,
    };
  },
  components: {
    Alert,
  },
  methods: {
    login: function(user) {
      this.$store.dispatch("loginTeacher", user);
    },
  },
  created() {
    this.$store.dispatch("settingTeacher", this.profiles);
  },
  watch: {
    user: function() {
      
    },
  },
};
</script>
