<template>
  <v-app v-breathing-colors="sample">
    <v-container class="fill-height" fluid>
      <SignUpDialog v-model="SignUpDialog" />
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
                        label="user"
                        name="user"
                        type="user"
                        v-model="email"
                        color="teal darken-1"
                      />
                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        v-model="password"
                        color="teal darken-1"
                      />
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <div class="text-center">
                      <v-btn
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
                <v-col cols="12" md="6" class="teal darken-1">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">New User?</h1>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn
                      rounded
                      outlined
                      dark
                      @click="step++, (SignUpDialog = true)"
                      >SIGN UP</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <!-- </v-window-item>
              
            </v-window> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
/* eslint-disable */
import SignUpDialog from "@/components/SignUpDialog.vue";

export default {
  data() {
    return {
      email: "abc", // email adress
      password: "123",
      // vue breathing colours
      step: 1,
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
  watch: {
    email(value) {
      console.log("user has changed", value);
    },
  },
  mounted() {
    setTimeout(() => {
      this.email = "hello world";
    }, 2000);
  },
  props: {
    source: String,
  },
};
</script>

<style>
</style>
