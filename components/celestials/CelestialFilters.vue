<template>
  <div class="celestial-filters">
    <ul class="no-style">
      <li>
        <button
          class="btn btn-primary"
          :class="[filters.all ? 'active' : '']"
          @click="emitFilter('all')"
        >
          Tous
        </button>
        <button
          class="btn btn-primary btn-icon"
          :class="[filters.planets ? 'active' : '']"
          @click="emitFilter('planets')"
        >
          Planètes
          <img
            src="icons/saturn-planet-shape-white.svg"
            alt=""
            class="fs-icon icon-sm"
          >
        </button>
        <button
          class="btn btn-primary btn-icon"
          :class="[filters.moons ? 'active' : '']"
          @click="emitFilter('moons')"
        >
          Lunes
          <img
            src="icons/moon-and-stars-in-a-cloud-white.svg"
            alt=""
            class="fs-icon icon-sm"
          >
        </button>
        <button
          class="btn btn-primary btn-icon"
          :class="[filters.stars ? 'active' : '']"
          @click="emitFilter('stars')"
        >
          Etoiles
          <img src="icons/sun-shape-white.svg" alt="" class="fs-icon icon-sm">
        </button>
        <button
          class="btn btn-primary btn-icon"
          :class="[filters.others ? 'active' : '']"
          @click="emitFilter('others')"
        >
          Autres
          <img
            src="icons/stars-group-white.svg"
            alt=""
            class="fs-icon icon-sm"
          >
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CelestialFilters',
  props: {
    celestials: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      filters: {
        all: true,
        planets: false,
        moons: false,
        stars: false,
        others: false
      }
    }
  },
  methods: {
    /**
     * Emits the type of celestial body to filter for to parent
     */
    emitFilter (type) {
      // Reset filter appearance
      this.filters = {
        all: false,
        planets: false,
        moons: false,
        stars: false,
        others: false
      }

      // Triggers the correct filter
      if (type === 'all') {
        this.filters.all = true
      } else if (type === 'planets') {
        this.filters.planets = true
      } else if (type === 'moons') {
        this.filters.moons = true
      } else if (type === 'stars') {
        this.filters.stars = true
      } else if (type === 'others') {
        this.filters.others = true
      }

      this.$emit('filter:celestials', type)
    }
  }
})
</script>

<style lang="scss" scoped>
.celestial-filters {
  margin-bottom: 20px;
}
</style>
