<template>
  <div class="fs-wrapper">
    <navbar />
    <div class="fs-content">
      <Nuxt />
    </div>
    <toasts-list />
  </div>
</template>

<script>
import ToastsList from '@/components/toast/ToastsList.vue'

export default {
  components: { ToastsList }
}
</script>

<style lang="scss" scoped>
.fs-wrapper {
  position: relative;
  .fs-content {
    margin-top: 70px;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: stretch;
    > * {
      width: 100%;
    }
  }
}
</style>
