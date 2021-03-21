<template>
  <div class="toast-card" :class="[toast.category, closing ? 'closing' : '']">
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

import store from "@/store";

export default defineComponent({
  name: "ToastCard",
  data() {
    return {
      closing: false
    };
  },
  props: {
    toast: Object
  },
  methods: {
    // Counts down until 0 is reached
    countdown(timeToLive) {
      if (timeToLive > 0) {
        console.log(timeToLive);
        setTimeout(() => {
          timeToLive = timeToLive - 1;
          this.countdown(timeToLive);
        }, 900);
      } else {
        // When timer ends
        this.closing = true;
        setTimeout(() => {
          this.close();
        }, 1200);
      }
    },
    close() {
      store.dispatch("toasts/purgeToast", this.toast.id);
    }
  },
  mounted() {
    // Starts countdown to initial timer value
    this.countdown(this.toast.timer);
  }
});
</script>

<style lang="scss" scoped>
.toast-card {
  position: relative;
  width: 300px;
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
  &.closing {
    animation: fadeOut 1.2s cubic-bezier(0.175, 1, 0.32, 1),
      slideFromLeft 1.2s cubic-bezier(0.175, 1, 0.32, 1);
  }
}
</style>
