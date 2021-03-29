<template>
  <section class="error bg-image">
    <div class="splash">
      <h2 class="heading-1">
        <span v-if="error.statusCode === 404">Page non trouvée</span>
        <span v-else>Une erreur est survenue</span>
        <span>:(</span>
      </h2>
      <p>{{ error.message }}</p>
      <div>
        <nuxt-link :to="'/'">
          <AtomsFSButton>Retourner à la page d'accueil</AtomsFSButton>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

<style lang="scss">
.error {
  position: relative;
  min-height: inherit;
  padding: 0 10%;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:after {
    background-image: url("/celestials_bg-min.jpg");
  }
}
</style>
