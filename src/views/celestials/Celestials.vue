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

  // Initial state
  data() {
    return {
      celestials: []
    };
  },

  async mounted() {
    // Fetches from API...
    this.fetchBodies().then(res => {
      // ...and add type
      this.celestials = this.addType(res);
    });
  },

  methods: {
    /**
     * Fetches celestial bodies from API
     */
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
    },

    /**
     * Assign a type from the celestial object provided
     */
    addType(bodies: []) {
      return bodies.filter((e: any) => {
        // Check if element is planet
        if (e.isPlanet) {
          if (e.moons) {
            e.type = "planète à lunes";
          } else {
            e.type = "planète";
          }

          // Check if element is moon
        } else if (e.aroundPlanet != null) {
          e.type = "lune";

          // Check if element is star
        } else if (e.id === "soleil") {
          e.type = "étoile";

          // ...else, body is "other"
        } else {
          e.type = "autre";
        }
        return e;
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.celestials {
  position: relative;
  min-height: 100%;
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
