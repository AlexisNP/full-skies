<template>
  <div class="celestial-list-wrapper">
    <ul v-if="celestials" class="celestial-list grid no-style">
      <li
        v-for="(celestial, index) in celestials"
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

import CelestialCard from "@/components/celestials/CelestialCard.vue";

export default defineComponent({
  name: "celestial-list",
  components: {
    CelestialCard
  },
  props: {
    celestials: {
      type: Array
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
