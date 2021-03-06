<template>
  <section class="celestial">
    <header>
      <h1 class="heading-1">{{ celestial.name }}</h1>
    </header>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// API
import axios from "axios";
// Global methods
import { addCelestialType } from "@/plugins/methods";

export default defineComponent({
  name: "Celestial",
  data() {
    return {
      celestial: {},
      error: ""
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  mounted() {
    // Fetches from API...
    this.fetchCelestial()
      .then(res => {
        // ...and add type
        this.celestial = addCelestialType(res);
      })
      .catch(err => {
        this.error = err.message;
      });
  },
  methods: {
    /**
     * Fetches celestial bodies from API
     */
    fetchCelestial(): Promise<any> {
      return axios
        .get(`https://api.le-systeme-solaire.net/rest/bodies/${this.slug}`)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          this.error = err.message;
          return [];
        });
    }
  }
});
</script>
