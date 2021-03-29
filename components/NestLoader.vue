<template>
  <div class="fs-loader-wrapper">
    <div class="fs-loader" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NestLoader'
})
</script>

<style lang="scss">
.fs-loader-wrapper {
  padding: 100px 0;
  .fs-loader {
    display: block;
    position: relative;
    height: 100px;
    width: 100px;
    margin: -25px auto 0 auto;
    border: 2px solid transparent;
    border-top-color: $white;
    border-radius: 50%;
    -webkit-animation: spin7 1.5s ease infinite;
    animation: spin7 1.5s ease infinite;

    &:before {
      content: "";
      position: absolute;
      top: 14px;
      right: 14px;
      bottom: 14px;
      left: 14px;
      border: 2px solid transparent;
      border-radius: 50%;
      border-top-color: $white;
      -webkit-animation: spin7 3s linear infinite;
      animation: spin7 3s linear infinite;
    }

    &:after {
      content: "";
      position: absolute;
      top: 30px;
      right: 30px;
      bottom: 30px;
      left: 30px;
      border: 2px solid transparent;
      border-radius: 50%;
      border-top-color: $white;
      -webkit-animation: spin7 1.5s ease infinite;
      animation: spin7 1.5s ease infinite;
    }
  }
}

@-webkit-keyframes spin7 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes spin7 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>
