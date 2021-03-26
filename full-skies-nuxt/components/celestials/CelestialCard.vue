<template>
  <div class="celestial-card">
    <div class="card-wrapper">
      <div class="card-icon">
        <img
          v-if="celestial.type === 'planète à lunes'"
          src="/icons/saturn-and-other-planets.svg"
          class="fs-icon"
          alt="planet icon"
        >
        <img
          v-else-if="celestial.type === 'planète'"
          src="/icons/saturn-planet-shape.svg"
          class="fs-icon"
          alt="planet icon"
        >
        <img
          v-else-if="celestial.type === 'lune'"
          src="icons/moon-and-stars-in-a-cloud.svg"
          class="fs-icon"
          alt="moon icon"
        >
        <img
          v-else-if="celestial.type === 'étoile'"
          src="icons/sun-shape.svg"
          class="fs-icon"
          alt="moon icon"
        >
        <img
          v-else
          src="icons/stars-group.svg"
          alt="moon icon"
          class="fs-icon"
        >
      </div>

      <div class="card-header">
        <h3 class="heading-3">
          {{ celestial.name }}
        </h3>
        <p>
          Type :
          <span class="txt-capitalize">{{ celestial.type }}</span>
        </p>
      </div>

      <div class="card-info">
        <nuxt-link
          :to="`/astres/${celestial.id}`"
          class="no-style"
        >
          <span class="material-icons-round">info</span>
        </nuxt-link>
      </div>

      <div class="card-content">
        <div v-if="celestial.aroundPlanet">
          <p>
            Orbite autour de
            <nuxt-link
              :to="`/astres/${celestial.aroundPlanet.planet}`"
              class="txt-capitalize"
            >
              {{ celestial.aroundPlanet.planet }}
            </nuxt-link>
          </p>
        </div>
        <div v-if="celestial.gravity">
          <p>Facteur Gravité : {{ celestial.gravity }}</p>
        </div>
        <div v-if="celestial.density">
          <p>Facteur Densité : {{ celestial.density }}</p>
        </div>
      </div>

      <div v-if="celestial.discoveredBy" class="card-footer">
        <p>
          <i>
            Ce corps céleste a été découvert par
            {{ celestial.discoveredBy }} le {{ celestial.discoveryDate }}
          </i>
        </p>
      </div>

      <div class="card-actions">
        <button
          class="favourite no-style"
          :class="isFav ? 'active' : ''"
          @click="toggleFav(celestial)"
        >
          <span class="icon material-icons-round">favorite</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { v4 as uuidv4 } from 'uuid'

import store from '@/store'

export default defineComponent({
  name: 'CelestialCard',
  props: {
    celestial: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      type: 'unknown'
    }
  },
  computed: {
    isFav () {
      if (store.getters.isFav(this.celestial?.id)) {
        return true
      }
      return false
    }
  },
  methods: {
    toggleFav: (celestial) => {
      store.dispatch('toggleFav', celestial.id)
      if (store.getters.isFav(celestial.id)) {
        store.dispatch('toasts/pushToast', {
          id: uuidv4(),
          title: 'Favori ajouté',
          message: `${celestial.name} a été ajouté à la liste des favoris.`,
          category: 'valid',
          timer: 3
        })
      } else {
        store.dispatch('toasts/pushToast', {
          id: uuidv4(),
          title: 'Favori retiré',
          message: `${celestial.name} a été retiré de la liste des favoris.`,
          category: 'valid',
          timer: 3
        })
      }
    }
  }
})
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
      top: 20px;
      bottom: 20px;
      left: 0;
      right: 0;
      user-select: none;
      pointer-events: none;
      opacity: 4%;
      img {
        height: 100%;
        width: 100%;
        z-index: -1;
      }
    }

    > * {
      flex: 0 1 auto;
    }
    .card-header {
      padding-right: 60px;
    }
    .card-content {
      flex: 1 1 auto;
      min-height: 30px;
    }

    .card-info {
      position: absolute;
      top: 0;
      right: 0;
    }

    .card-actions {
      color: #afafaf;
      .favourite {
        .icon {
          color: #afafaf;
        }
        &.active {
          .icon {
            position: relative;
            display: inline-block;
            will-change: font-size;
            animation: toggleFavHeart 0.6s cubic-bezier(0.17, 0.89, 0.32, 1.49);
            animation-fill-mode: forwards;
          }
        }
      }
    }
  }
}
</style>
