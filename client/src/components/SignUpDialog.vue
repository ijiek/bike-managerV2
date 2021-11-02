<template>
  <v-dialog
    v-model="showDialog"
    :fullscreen="$vuetify.breakpoint.mobile"
    max-width="800"
    scrollable
    @keydown.esc="cancel"
  >
    <v-card>
      <v-toolbar> Creating User </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="8">
            <v-col cols="12">
              <v-text-field> </v-text-field>
            </v-col>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable */
export default {
  name: "SignUpDialog",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    cancel() {
      this.resolve(false);
      this.showDialog = false;
    },
  },
  computed: {
    // gets value of dialog true of false
    showDialog: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit("input", value);
      },
    },
  },
};
</script>

<style>
</style>