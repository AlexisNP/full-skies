<template>
  <section class="celestials">
    <header>
      <h1 class="heading-1">Le système solaire</h1>
    </header>
    <div class="section-content">
      <celestials-list />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CelestialsList from "@/components/celestials/CelestialsList.vue";

export default defineComponent({
  name: "Celestials",
  components: {
    CelestialsList
  }
});
</script>

<style lang="scss" scoped>
.celestials {
  position: relative;
  min-height: 100%;
  padding: 25px 5%;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: url("/celestials_bg-min.jpg");
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
    opacity: 33%;
    pointer-events: none;
  }
}
</style>
