<template>
  <!-- <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div> -->

  <v-container fluid>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          cver
          <v-img
            lazy-src="../assets/unsplashMB.jpg"
            max-height="150"
            max-width="250"
            :src="require('../assets/unsplashMB.jpg')"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  //   data() {
  //     return {
  //       loading: false,
  //       post: null,
  //       error: null,
  //     };
  //   },
  //   created() {
  //     // fetch the data when the view is created and the data is
  //     // already being observed
  //     this.fetchData();
  //   },
  //   watch: {
  //     // call again the method if the route changes
  //     $route: "fetchData",
  //   },
  //   methods: {
  //     fetchData() {
  //       this.error = this.post = null;
  //       this.loading = true;
  //       const fetchedId = this.$route.params.id;
  //       // replace `getPost` with your data fetching util / API wrapper
  //       getPost(fetchedId, (err, post) => {
  //         // make sure this request is the last one we did, discard otherwise
  //         if (this.$route.params.id !== fetchedId) return;
  //         this.loading = false;
  //         if (err) {
  //           this.error = err.toString();
  //         } else {
  //           this.post = post;
  //         }
  //       });
  //     },
  //   },
};
</script>