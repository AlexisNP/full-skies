<template>
  <section class="home bg-image bg-fade-in">
    <div class="splash fade-in-children">
      <h2 class="heading-1">
        Full Skies
      </h2>
      <p class="heading-2">
        Explorez les cieux et le système solaire avec Full Skies !
      </p>
      <p class="heading-2">
        Embarquez pour un voyage stellaire ; destination : le système solaire et
        ses astres si proches.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
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
