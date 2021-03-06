<template>
  <div class="celestial-list-wrapper">
    <celestial-filters @filter:celestials="filterCelestials" />
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

// API
import axios from "axios";
// Global methods
import { addCelestialType } from "@/plugins/methods";

import CelestialCard from "@/components/celestials/CelestialCard.vue";
import CelestialFilters from "./CelestialFilters.vue";

export default defineComponent({
  name: "celestial-list",
  components: {
    CelestialCard,
    CelestialFilters
  },

  // Initial state
  data() {
    return {
      celestials: Array<any>(),
      activeFilter: "all"
    };
  },

  computed: {
    sortedCelestials(): any {
      if (this.activeFilter == "moons") {
        return this.celestials.filter(e => e.type === "lune");
      } else if (this.activeFilter == "planets") {
        return this.celestials.filter(
          e => e.type === "planète" || e.type === "planète à lunes"
        );
      } else if (this.activeFilter == "stars") {
        return this.celestials.filter(e => e.type === "étoile");
      } else if (this.activeFilter == "others") {
        return this.celestials.filter(e => e.type === "autre");
      } else {
        return this.celestials;
      }
    }
  },

  mounted() {
    // Fetches from API...
    this.fetchCelestials().then(res => {
      // ...and add type
      this.celestials = this.addType(res);
    });
  },

  methods: {
    /**
     * Fetches celestial bodies from API
     */
    fetchCelestials(): Promise<any> {
      return axios
        .get("https://api.le-systeme-solaire.net/rest/bodies/")
        .then(res => {
          return res.data.bodies;
        })
        .catch(err => {
          console.log(err);
          return [];
        });
    },

    /**
     * Assign a type from the celestial object provided
     */
    addType(bodies: Array<any>): Array<any> {
      return bodies.map((e: any) => addCelestialType(e));
    },

    /**
     * Applies the filter type to the data
     */
    filterCelestials(type: string) {
      this.activeFilter = type;
    }
  }
});
</script>

<style lang="scss" scoped>
.celestial-list {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-flow: row wrap;
  .celestial-item {
    width: calc(33% - 15px);
    margin-bottom: 20px;
  }
}
</style>
