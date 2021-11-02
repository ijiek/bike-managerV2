<template>
  <v-footer class="teal font-weight-medium">
    <v-col class="text-center" cols="12">
      Copyright © {{ new Date().getFullYear() }} — <strong>Naya Mugot</strong> —
      <v-btn icon color="black" @click="openEmail">
        <v-icon> mdi-email-newsletter </v-icon>
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  methods: {
    // eslint-disable-next-line
    openEmail() {
      // eslint-disable-next-line
      window.open("https://forms.gle/7412ncHUmyRz5Fhc9");
      // eslint-disable-next-line
    }, // eslint-disable-next-line
  }, // eslint-disable-next-line
};
</script>

<style>
</style>
