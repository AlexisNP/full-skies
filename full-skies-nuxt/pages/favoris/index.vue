<template>
  <section class="favourites bg-image">
    <header>
      <h1 class="heading-1">
        Mes favoris
      </h1>
    </header>
    <div class="section-content">
      <celestials-list :celestials="favourites" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Favourites',
  data () {
    return {
      favorites: []
    }
  },
  created () {
    // const favourites = this.$store.user.favourites
    // console.log(favourites)
  }
}
</script>

<style lang="scss">
.favourites {
  position: relative;
  min-height: 100%;
  padding: 25px 5%;

  &:after {
    background-image: url("/home_bg-min.jpg");
  }
}
</style>
