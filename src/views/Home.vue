<template>
  <section class="home bg-image bg-fade-in">
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
    background-image: url("/home_bg-min.jpg");
  }
}
</style>
