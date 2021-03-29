<template>
  <div class="celestial-filters">
    <ul class="no-style">
      <li>
        <AtomsFSButton
          :class="[filters.all ? 'active' : '']"
          @click.native="emitFilter('all')"
        >
          Tous
        </AtomsFSButton>
        <AtomsFSButton
          :class="[filters.planets ? 'active' : '']"
          icon="planet"
          inverted
          @click.native="emitFilter('planets')"
        >
          Planètes
        </AtomsFSButton>
        <AtomsFSButton
          :class="[filters.moons ? 'active' : '']"
          icon="moon"
          inverted
          @click.native="emitFilter('moons')"
        >
          Lunes
        </AtomsFSButton>
        <AtomsFSButton
          :class="[filters.stars ? 'active' : '']"
          icon="sun"
          inverted
          @click.native="emitFilter('stars')"
        >
          Etoiles
        </AtomsFSButton>
        <AtomsFSButton
          :class="[filters.others ? 'active' : '']"
          icon="stars"
          inverted
          @click.native="emitFilter('others')"
        >
          Autres
        </AtomsFSButton>
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
