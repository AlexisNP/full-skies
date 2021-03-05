<template>
  <div class="celestial-card">
    <div class="card-wrapper">
      <div class="card-icon">
        <img
          v-if="celestial.type === 'planète à lunes'"
          src="/icons/saturn-and-other-planets.svg"
          alt="planet icon"
        />
        <img
          v-else-if="celestial.type === 'planète'"
          src="/icons/saturn-planet-shape.svg"
          alt="planet icon"
        />
        <img
          v-else-if="celestial.type === 'lune'"
          src="icons/moon-and-stars-in-a-cloud.svg"
          alt="moon icon"
        />
        <img
          v-else-if="celestial.type === 'étoile'"
          src="icons/sun-shape.svg"
          alt="moon icon"
        />
        <img v-else src="icons/stars-group.svg" alt="moon icon" />
      </div>

      <div class="card-header">
        <h3 class="heading-3">{{ celestial.name }}</h3>
        <p>
          Type :
          <span class="txt-capitalize">{{ celestial.type }}</span>
        </p>
      </div>

      <div class="card-content">
        <div v-if="celestial.aroundPlanet">
          <p>
            Orbite autour de
            <router-link
              :to="{
                name: 'CelesteSingle',
                params: { slug: celestial.aroundPlanet.planet }
              }"
              class="txt-capitalize"
            >
              {{ celestial.aroundPlanet.planet }}
            </router-link>
          </p>
        </div>
        <div v-if="celestial.gravity">
          <p>Facteur Gravité : {{ celestial.gravity }}</p>
        </div>
        <div v-if="celestial.density">
          <p>Facteur Densité : {{ celestial.density }}</p>
        </div>
      </div>

      <div class="card-footer" v-if="celestial.discoveredBy">
        <p>
          <i>
            Ce corps céleste a été découvert par
            {{ celestial.discoveredBy }} le {{ celestial.discoveryDate }}
          </i>
        </p>
      </div>

      <div class="card-actions">
        <router-link
          :to="{ name: 'CelesteSingle', params: { slug: celestial.id } }"
          class="btn btn-primary"
        >
          Détails
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "celestial-card",
  data() {
    return {
      type: "unknown"
    };
  },
  props: {
    celestial: Object
  }
});
</script>

<style lang="scss" scoped>
.celestial-card {
  height: 100%;
  min-height: 100%;
  padding: 20px;
  color: $fs-black;
  background: rgba($white, 85%);
  border-radius: 5px;

  .card-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;

    .card-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      img {
        max-width: 50px;
        max-height: 50px;
      }
    }

    > * {
      flex: 0 1 auto;
    }
    .card-content {
      flex: 1 1 auto;
      min-height: 30px;
    }
  }
}
</style>
