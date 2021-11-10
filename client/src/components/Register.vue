<template>
  <v-app v-breathing-colors="sample">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <!-- <v-window v-model="step"> -->
            <!-- Start of First Window -->
            <!-- <v-window-item :value="1"> -->
            <v-card-text>
              <v-row>
                <v-col>
                  <v-card-text>
                    <h1 class="text-center">Sign in to Track</h1>

                    <!-- <h4 class="text-center">Enter Email</h4> -->
                    <v-form>
                      <v-text-field
                        label="email"
                        name="email"
                        type="email"
                        to="/home"
                        v-model="user"
                        color="teal darken-1"
                      />
                      <v-text-field
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        v-model="user"
                        color="teal darken-1"
                      />
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <div class="text-center">
                      <v-btn
                        @click="register"
                        to="/home"
                        class="center"
                        rounded
                        color="teal darken-1"
                        dark
                        >SIGN IN</v-btn
                      >
                    </div>
                  </v-card-actions>
                </v-col>
                <v-col cols="5" class="blue-grey darken-3">
                  <v-img
                    lazy-src="../assets/unsplashMB.jpg"
                    contain
                    :src="require('../assets/unsplashMB.jpg')"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
            <!-- </v-window-item> -->
            <!-- Start of Second Window -->

            <!-- </v-window> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
/* eslint-disable */
import SignUpDialog from "@/components/SignUpDialog.vue";
import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  data() {
    return {
      user: "", // email adress
      password: "",
      // vue breathing colours
      // step: 1,
      sample: {
        colors: ["#E0F2F1", "#80CBC4", "#26A69A", "#00796B", "#009688"],
        interval: 3000,
        transition: {
          duration: 6000,
        },
      },
    };
  },
  components: {
    SignUpDialog,
  },
  computer: {
    showDialog: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit("input", value);
      },
    },
  },
  // watch: {
  //   email(value) {
  //     console.log("user has changed", value);
  //   },
  // },
  // mounted() {
  //   setTimeout(() => {
  //     this.user = "hello world";
  //   }, 2000);
  // },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        users: this.user,
        password: this.password,
      });
      console.log(response.data);
    },
  },
  props: {
    source: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
