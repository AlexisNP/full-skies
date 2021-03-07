<template>
  <section class="celestial">
    <header>
      <h1 class="heading-1">{{ celestial.name }}</h1>
    </header>
    <div class="section-content">
      <div v-if="error">Une erreur est survenue : {{ error }}</div>
      <div v-if="celestial">{{ celestial }}</div>
    </div>
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
      celestial: Object,
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
      .catch(() => {
        this.error = "Impossible de récupérer l'astre demandé.";
      });
  },

  methods: {
    /**
     * Fetches celestial body from API
     */
    fetchCelestial(): Promise<any> {
      return axios
        .get(`https://api.le-systeme-solaire.net/rest/bodies/${this.slug}`)
        .then(res => {
          return res.data;
        });
    }
  }
});
</script>
