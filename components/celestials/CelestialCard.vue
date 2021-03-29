<template>
  <div class="celestial-card">
    <div class="card-wrapper">
      <celestial-card-icon :type="celestial.type" />

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
          @click="toggleFav()"
        >
          <span class="icon material-icons-round">favorite</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import CelestialCardIcon from './CelestialCardIcon.vue'

export default {
  name: 'CelestialCard',
  components: { CelestialCardIcon },
  props: {
    celestial: {
      type: Object,
      default: () => { return {} }
    }
  },

  computed: {
    isFav () {
      return this.$store.getters.isFav(this.celestial.id)
    }
  },

  methods: {
    toggleFav () {
      if (!this.isFav) {
        this.$store.dispatch('toasts/pushToast', {
          id: uuidv4(),
          title: 'Favori ajouté',
          message: `${this.celestial.name} a été ajouté à la liste des favoris.`,
          link: {
            text: 'Consultez vos favoris.',
            url: '/favoris'
          },
          category: 'valid',
          timer: 3
        })
      } else {
        this.$store.dispatch('toasts/pushToast', {
          id: uuidv4(),
          title: 'Favori retiré',
          message: `${this.celestial.name} a été retiré de la liste des favoris.`,
          link: {
            text: 'Consultez vos favoris.',
            url: '/favoris'
          },
          category: 'valid',
          timer: 3
        })
      }
      this.$store.dispatch('toggleFav', this.celestial)
    }
  }
}
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
