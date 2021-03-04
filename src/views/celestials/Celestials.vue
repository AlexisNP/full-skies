<template>
  <section class="celestials">
    <h2>Le système solaire</h2>
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
