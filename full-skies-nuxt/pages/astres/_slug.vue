<template>
  <section class="celestial bg-image">
    <div v-if="celestialLoaded">
      <header>
        <h1 class="heading-1">
          <span>{{ celestial.name }}</span>
          <span v-if="celestial.name != celestial.englishName">/ {{ celestial.englishName }}</span>
          <span class="txt-capitalize">- {{ celestial.type }}</span>
        </h1>
      </header>
      <div class="section-content">
        <main class="celestial-body">
          <div>
            <h3 class="heading-3">
              Informations
            </h3>
            <p v-if="celestial.discoveredBy">
              Découvert par {{ celestial.discoveredBy }} le {{ celestial.discoveryDate }}
            </p>
            <p>Facteur Gravité : {{ celestial.gravity }}</p>
            <p>Facteur Densité : {{ celestial.density }}</p>
            <p>Inclinaison : {{ celestial.inclination }}</p>
          </div>
          <div v-if="celestial.moons" class="celestial-moons">
            <h2 class="heading-2">
              Lunes orbitant {{ celestial.name }}
            </h2>
            <celestials-list :celestials="celestial.moons" :has-filters="false" />
          </div>
        </main>
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
import NestLoader from '@/components/NestLoader.vue'

export default {
  name: 'Celestial',
  components: {
    NestLoader
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
    fetchCelestial(this.$route.params.slug)
      .then((res) => {
        this.celestial = res
        this.celestialLoaded = true
        return this.celestial
      })
      .catch(() => {
        this.error = "Impossible de récupérer l'astre demandé."
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

  .celestial-body {
    .celestial-type {
      text-transform: capitalize;
    }
  }
}
</style>
