<template>
  <section class="celestial bg-image">
    <div v-if="loaded">
      <header>
        <h1 class="heading-1">{{ celestial.name }}</h1>
      </header>
      <div class="section-content">
        <div v-if="error">Une erreur est survenue : {{ error }}</div>
        <div>{{ celestial }}</div>
      </div>
    </div>
    <div v-else>
      <nest-loader />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// API
import { fetchCelestial } from "@/api/le-systeme-solaire";

// Global methods
import { addCelestialType } from "@/plugins/methods";
import NestLoader from "@/components/NestLoader.vue";

export default defineComponent({
  components: {
    NestLoader
  },
  name: "Celestial",

  data() {
    return {
      celestial: false,
      loaded: false,
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
    fetchCelestial(this.slug)
      .then(res => {
        // Adds type after fake loading (it's just to showcase the spinner tbh)
        setTimeout(() => {
          this.celestial = addCelestialType(res);
          this.loaded = true;
        }, 1000);
      })
      .catch(() => {
        this.error = "Impossible de récupérer l'astre demandé.";
      });
  }
});
</script>

<style lang="scss" scoped>
.celestial {
  position: relative;
  min-height: 100%;
  padding: 25px 5%;

  &:after {
    background-image: url("/celestials_bg-min.jpg");
  }
}
</style>
