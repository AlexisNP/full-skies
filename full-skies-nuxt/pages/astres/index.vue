<template>
  <section class="celestials bg-image">
    <header>
      <h1 class="heading-1">
        Le système solaire
      </h1>
    </header>
    <div class="section-content">
      <div v-if="error">
        Une erreur est survenue : {{ error }}
      </div>
      <div v-if="celestials.length > 1">
        <celestials-list :celestials="celestials" />
      </div>
      <div v-else>
        <nest-loader />
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api'

// API
import { fetchCelestials } from '@/api/le-systeme-solaire'

// Global methods
import { addCelestialsType } from '@/plugins/methods'

import CelestialsList from '@/components/celestials/CelestialsList.vue'
import NestLoader from '@/components/NestLoader.vue'

export default {
  name: 'Celestials',
  components: {
    CelestialsList,
    NestLoader
  },

  setup () {
    const celestials = ref([])

    const getCelestials = async () => {
      celestials.value = await fetchCelestials()
      celestials.value = addCelestialsType(celestials.value)
    }

    onMounted(getCelestials)

    return { celestials }
  },
  data () {
    return {
      error: ''
    }
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
