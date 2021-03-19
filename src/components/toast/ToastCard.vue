<template>
  <div class="toast-card" :class="variant">
    <div class="toast-title">
      <slot name="title" />
    </div>
    <div class="toast-message">
      <slot name="message" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToastCard",
  props: {
    variant: String
  }
});
</script>

<style lang="scss" scoped>
.toast-card {
  position: relative;
  padding: 20px 30px 26px;
  border-radius: 5px;
  animation: fadeIn 1s cubic-bezier(0.175, 1, 0.32, 1),
    slideFromRight 1s cubic-bezier(0.175, 1, 0.32, 1);
    overflow: hidden;
  .toast-title {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: $fw-bold;
  }
  &:after {
    position: absolute;
    display: block;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    background: rgba($fs-black, 33%);
  }
  &.info {
    background-color: $info;
  }
  &.valid {
    background-color: $valid;
  }
  &.warning {
    color: $fs-black;
    background-color: $warning;
  }
  &.danger {
    background-color: $danger;
  }
}
</style>
