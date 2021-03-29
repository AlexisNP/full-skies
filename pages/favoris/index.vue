<template>
  <section class="favourites bg-image">
    <main>
      <header>
        <h1 class="heading-1">
          Mes favoris
        </h1>
      </header>
      <div class="section-content">
        <div v-if="favourites && favourites.length >= 1">
          <celestials-list :celestials="favourites" />
        </div>
        <div v-else>
          <h3 class="heading-3">
            Vous n'avez aucun favori pour le moment.
          </h3>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Favourites',

  computed: {
    favourites () {
      return this.$store.state.user.favourites
    }
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
