<template>
  <section class="celestials">
    <header>
      <h1 class="heading-1">Le système solaire</h1>
    </header>
    <div class="section-content">
      <celestials-list :celestials="celestials" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

import CelestialsList from "@/components/celestials/CelestialsList.vue";

export default defineComponent({
  name: "Celestials",
  components: {
    CelestialsList
  },
  data() {
    return {
      celestials: []
    };
  },
  methods: {
    fetchBodies() {
      return axios
        .get("https://api.le-systeme-solaire.net/rest/bodies/")
        .then(res => {
          return res.data.bodies;
        })
        .catch(err => {
          console.log(err);
          return [];
        });
    }
  },
  async mounted() {
    this.celestials = await this.fetchBodies();
  }
});
</script>

<style lang="scss" scoped>
.celestials {
  position: relative;
  min-height: inherit;
  padding: 25px 10%;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: url("/celestials_bg-min.jpg");
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
    opacity: 33%;
    pointer-events: none;
  }
}
</style>
