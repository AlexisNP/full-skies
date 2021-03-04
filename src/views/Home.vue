<template>
  <section class="home">
    <h2 class="heading">Homepage</h2>
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
  padding: 0 20px;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: -20px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: url("/home_bg-min.jpg");
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
    pointer-events: none;
  }
}
</style>
