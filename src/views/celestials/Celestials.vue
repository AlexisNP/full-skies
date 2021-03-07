<template>
  <section class="celestials">
    <header>
      <h1 class="heading-1">Le système solaire</h1>
    </header>
    <div class="section-content">
      <div v-if="error">Une erreur est survenue : {{ error }}</div>
      <div v-if="celestials.length > 1">
        <celestials-list :celestials="celestials" />
      </div>
      <div v-else>
        <nest-loader />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// API
import axios from "axios";
// Global methods
import { addCelestialType } from "@/plugins/methods";

import CelestialsList from "@/components/celestials/CelestialsList.vue";
import NestLoader from "@/components/NestLoader.vue";

export default defineComponent({
  name: "Celestials",
  components: {
    CelestialsList,
    NestLoader
  },
  data() {
    return {
      celestials: Array<any>(),
      error: ""
    };
  },

  mounted() {
    this.fetchCelestials()
      .then(res => {
        this.celestials = this.addType(res);
      })
      .catch(() => {
        this.error = "Impossible de récupérer les astres.";
      });
  },

  methods: {
    /**
     * Fetches celestial bodies from API
     */
    fetchCelestials(): Promise<any> {
      return axios
        .get("https://api.le-systeme-solaire.net/rest/bodies/")
        .then(res => {
          return res.data.bodies;
        });
    },
    /**
     * Assign a type from the celestial object provided
     */
    addType(bodies: Array<any>): Array<any> {
      return bodies.map((e: any) => addCelestialType(e));
    }
  }
});
</script>

<style lang="scss" scoped>
.celestials {
  position: relative;
  min-height: 100%;
  padding: 25px 5%;

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
