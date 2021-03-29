<template>
  <div class="card-icon">
    <img
      v-if="type === 'planète à lunes'"
      src="/icons/saturn-and-other-planets.svg"
      class="fs-icon"
      alt="planet icon"
    >
    <img
      v-else-if="type === 'planète'"
      src="/icons/saturn-planet-shape.svg"
      class="fs-icon"
      alt="planet icon"
    >
    <img
      v-else-if="type === 'lune'"
      src="/icons/moon-and-stars-in-a-cloud.svg"
      class="fs-icon"
      alt="moon icon"
    >
    <img
      v-else-if="type === 'étoile'"
      src="/icons/sun-shape.svg"
      class="fs-icon"
      alt="moon icon"
    >
    <img
      v-else
      src="/icons/stars-group.svg"
      alt="moon icon"
      class="fs-icon"
    >
  </div>
</template>

<script>
export default {
  name: 'CelestialCardIcon',

  props: {
    type: {
      type: String,
      default: () => { return '' }
    }
  }
}
</script>

<style lang="scss">
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
</style>
