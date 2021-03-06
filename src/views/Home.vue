<template>
  <section class="home">
    <div class="splash fade-in-children">
      <h2 class="heading-1">Full Skies</h2>
      <p class="heading-2">
        L'application Full Skies explore les cieux à votre place !
      </p>
      <p class="heading-2">
        Embarquez pour un voyage stellaire ; destination : le système solaire et
        ses astres.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home"
});
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  min-height: inherit;
  padding: 0 10%;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 120vw;
    background-image: url("/home_bg-min.jpg");
    background-size: cover;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    animation: fadeInBg 2s ease-out 0s 1 forwards,
      paneBgAround 35s ease-in-out 0s infinite forwards;
  }
}
</style>
