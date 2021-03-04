<template>
  <div class="celestial-card">
    {{ celestial.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "celestial-card",
  props: {
    celestial: Object
  }
});
</script>
