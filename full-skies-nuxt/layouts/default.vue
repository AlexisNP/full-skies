<template>
  <div class="fs-wrapper">
    <div class="fs-content">
      <Nuxt />
    </div>
  </div>
</template>

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
