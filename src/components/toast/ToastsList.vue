<template>
  <div class="toast-wrapper">
    <div class="toast-item">
      <toast-card variant="info">
        <template #title>Toast informant</template>
        <template #message>
          Ce message est utilisé pour informer.
        </template>
      </toast-card>
    </div>
    <div class="toast-item">
      <toast-card variant="valid">
        <template #title>Toast validant</template>
        <template #message>
          Ce message est utilisé pour valider.
        </template>
      </toast-card>
    </div>
    <div class="toast-item">
      <toast-card variant="warning">
        <template #title>Toast avertissant</template>
        <template #message>
          Ce message est utilisé pour avertir.
        </template>
      </toast-card>
    </div>
    <div class="toast-item">
      <toast-card variant="danger">
        <template #title>Toast d'alerte</template>
        <template #message>
          Ce message est utilisé pour alerter.
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
