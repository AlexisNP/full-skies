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
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  .fs-content {
    padding: 70px 20px 20px;
    flex-grow: 1;
  }
}
</style>
