<template>
  <div class="celestial-list-wrapper">
    <div v-if="celestials">
      <celestial-filters v-if="hasFilters && celestials.length > 0" @filter:celestials="filterCelestials" />

      <ul v-if="celestials" class="celestial-list grid no-style">
        <li
          v-for="(celestial, index) in sortedCelestials"
          :key="index"
          class="celestial-item"
        >
          <celestial-card :celestial="celestial" />
        </li>
      </ul>
    </div>

    <div v-else>
      <nest-loader />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import CelestialCard from '@/components/celestials/CelestialCard.vue'
import NestLoader from '@/components/NestLoader.vue'
import CelestialFilters from './CelestialFilters.vue'

export default defineComponent({
  name: 'CelestialList',
  components: {
    CelestialCard,
    CelestialFilters,
    NestLoader
  },
  props: {
    celestials: {
      type: Array,
      required: true
    },
    hasFilters: {
      type: Boolean,
      default: true
    }
  },

  // Initial state
  data () {
    return {
      activeFilter: 'all'
    }
  },

  computed: {
    sortedCelestials () {
      if (this.activeFilter === 'moons') {
        return this.celestials.filter(e => e.type === 'lune')
      } else if (this.activeFilter === 'planets') {
        return this.celestials.filter(
          e => e.type === 'planète' || e.type === 'planète à lunes'
        )
      } else if (this.activeFilter === 'stars') {
        return this.celestials.filter(e => e.type === 'étoile')
      } else if (this.activeFilter === 'others') {
        return this.celestials.filter(e => e.type === 'autre')
      } else {
        return this.celestials
      }
    }
  },

  methods: {
    /**
     * Applies the filter type to the data
     */
    filterCelestials (type) {
      this.activeFilter = type
    }
  }
})
</script>

<style lang="scss" scoped>
.celestial-list {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-flow: row wrap;
  .celestial-item {
    width: calc(33% - 20px);
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
