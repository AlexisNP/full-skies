<template>
  <section class="celestial bg-image">
    <div v-if="celestialLoaded">
      <header>
        <h1 class="heading-1">
          {{ celestial.name }}
        </h1>
      </header>
      <div class="section-content">
        <div v-if="error">
          Une erreur est survenue : {{ error }}
        </div>
        <div>{{ celestial }}</div>
      </div>
    </div>
    <div v-else>
      <nest-loader />
    </div>
  </section>
</template>

<script>
// API
import { fetchCelestial } from '@/api/le-systeme-solaire'
// import { fetchWikipediaExcerpt } from "@/api/wikipedia";

// Global methods
import { addCelestialType } from '@/plugins/methods'
import NestLoader from '@/components/NestLoader.vue'

export default {
  name: 'Celestial',
  components: {
    NestLoader
  },

  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      celestial: {},
      celestialLoaded: false,
      excerpt: '',
      error: ''
    }
  },

  mounted () {
    // Fetches from API...
    fetchCelestial(this.slug)
      .then((res) => {
        this.celestial = addCelestialType(res)
        this.celestialLoaded = true
        return this.celestial
      })
      .catch(() => {
        this.error = "Impossible de récupérer l'astre demandé."
      })
      .then(() => {
        // fetchWikipediaExcerpt(celestial);
      })
  }
}
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
