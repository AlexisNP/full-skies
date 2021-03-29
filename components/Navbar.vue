<template>
  <div class="navbar">
    <ul class="navbar-menu no-style">
      <li v-for="item in items" :key="item.url" class="navbar-item">
        <nuxt-link :to="item.link" class="navbar-link no-style">
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Navbar',
  data () {
    return {
      items: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'Astres',
          link: '/astres'
        },
        {
          text: 'Favoris',
          link: '/favoris'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  background: $fs-black;
  box-shadow: 0 5px 5px rgba($black, 0.3);
  z-index: 9999;

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
    opacity: 0.75;
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

        &.nuxt-link-exact-active {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
