<template>
  <section class="celestial bg-image">
    <main v-if="celestial">
      <header>
        <h1 class="heading-1">
          <span>{{ celestial.name }}</span>
          <span v-if="celestial.name != celestial.englishName">/ {{ celestial.englishName }}</span>
          <span class="txt-capitalize">- {{ celestial.type }}</span>
        </h1>
      </header>

      <div class="section-content">
        <div class="celestial-body">
          <div>
            <h3 class="heading-3">
              Informations
            </h3>
            <p v-if="celestial.aroundPlanet">
              Orbite autour de
              <nuxt-link
                :to="`/astres/${celestial.aroundPlanet.planet}`"
                class="txt-capitalize fs-link"
              >
                {{ celestial.aroundPlanet.planet }}
              </nuxt-link>
            </p>

            <p v-if="celestial.discoveredBy">
              Découvert par {{ celestial.discoveredBy }} le {{ celestial.discoveryDate }}
            </p>
            <p>Facteur Gravité : {{ celestial.gravity }}</p>
            <p>Facteur Densité : {{ celestial.density }}</p>
            <p>Inclinaison : {{ celestial.inclination }}</p>
          </div>

          <div v-if="celestial.moons" class="celestial-moons">
            <h2 class="heading-2">
              Astres orbitant {{ celestial.name }}
            </h2>

            <celestials-list :celestials="celestial.moons" :has-filters="false" />
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
// API
import { fetchCelestial } from '@/api/le-systeme-solaire'

export default {
  name: 'Celestial',

  async asyncData ({ params, error }) {
    const slug = params.slug
    try {
      const celestial = await fetchCelestial(slug)
      return { celestial }
    } catch (err) {
      error(err)
    }
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
