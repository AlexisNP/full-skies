<template>
  <section class="celestials bg-image">
    <header>
      <h1 class="heading-1">
        Le système solaire
      </h1>
    </header>
    <div class="section-content">
      <celestials-list :celestials="celestials" />
    </div>
  </section>
</template>

<script>
// API
import { fetchCelestials } from '@/api/le-systeme-solaire'

import CelestialsList from '@/components/celestials/CelestialsList.vue'

export default {
  name: 'Celestials',
  components: {
    CelestialsList
  },

  data () {
    return {
      celestials: []
    }
  },

  mounted () {
    fetchCelestials()
      .then((res) => {
        this.celestials = res
      })
      .catch(() => {
        this.error = 'Impossible de récupérer les astres.'
      })
  }
}
</script>

<style lang="scss" scoped>
.celestials {
  position: relative;
  min-height: 100%;
  padding: 25px 5%;

  &:after {
    background-image: url("/celestials_bg-min.jpg");
  }
}
</style>
