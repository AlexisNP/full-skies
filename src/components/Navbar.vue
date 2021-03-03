<template>
  <div class="navbar">
    <ul class="navbar-menu no-style">
      <li v-for="item in items" :key="item.url" class="navbar-item">
        <router-link :to="item.link" class="navbar-link no-style">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "navbar",
  data() {
    return {
      items: [
        {
          text: "Home",
          link: "/"
        },
        {
          text: "About",
          link: "/about"
        },
        {
          text: "Profile",
          link: "/profile"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 20px;
  background: $black;
  box-shadow: 0 5px 5px rgba($white, 0.1);

  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 50%;
    display: block;
    content: "";
    background-image: url("/nav-bg.png");
    background-size: cover;
    background-position: center right;
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    height: 70px;
    line-height: 70px;

    .navbar-item {
      &:not(:first-child) {
        padding-left: 20px;
      }

      .navbar-link {
        color: $white;
        position: relative;
        padding: 0 8px;
        &:after {
          display: block;
          content: "";
          position: absolute;
          background: $white;
          width: 0;
          height: 1px;
          bottom: -8px;
          transition: width 0.25s ease-in-out;
        }

        &.router-link-active {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
