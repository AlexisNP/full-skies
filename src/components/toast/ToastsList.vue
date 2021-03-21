<template>
  <div class="toast-wrapper">
    <div class="toast-item" v-for="toast in queue" :key="toast.id">
      <toast-card :variant="toast.category" :toast="toast">
        <template #title>{{ toast.title }}</template>
        <template #message>
          {{ toast.message }}
        </template>
      </toast-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import ToastCard from "./ToastCard.vue";

export default defineComponent({
  name: "ToastsList",
  components: {
    ToastCard
  },
  computed: {
    queue() {
      return this.$store.state.toasts.queue;
    }
  }
});
</script>

<style lang="scss" scoped>
.toast-wrapper {
  position: fixed;
  top: 90px;
  height: 100%;
  right: 0;
  pointer-events: none;
  .toast-item {
    pointer-events: all;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
