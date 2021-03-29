<template>
  <button
    class="btn btn-primary"
    :class="[
      icon ? 'btn-icon' : ''
    ]"
  >
    <slot />
    <span v-if="icon">
      <img
        :src="
          white ? `/icons/${icon}.svg` : `/icons/${icon}-white.svg`
        "
        alt=""
        class="fs-icon icon-sm"
      >
    </span>
  </button>
</template>

<script>
export default {
  name: 'FSButton',
  props: {
    icon: {
      type: String,
      default: () => { return '' }
    },
    white: {
      type: Boolean,
      default: () => { return false }
    }
  }
}
</script>

<style>

</style>
