<template>
  <div class="fs-wrapper">
    <navbar />
    <div class="fs-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {
    Navbar
  }
});
</script>

<style lang="scss" scoped>
.fs-wrapper {
  position: relative;
  .fs-content {
    margin-top: 70px;
    min-height: calc(100vh - 70px);
  }
}
</style>
