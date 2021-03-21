import { createStore } from "vuex";

import toastStore from "./toasts";

export default createStore({
  state: () => ({
    user: {
      avatarUrl: "",
      favourites: Array<{ id: string }>()
    }
  }),
  getters: {
    // Returns the number of favs for the user
    favCount: (state): number => {
      return state.user.favourites.length;
    },
    // Returns true if celestial is fav
    isFav: state => (celestialId: string) => {
      return state.user.favourites.find(fav => fav.id === celestialId);
    }
  },
  mutations: {
    addFav: (state, celestialId: string) => {
      state.user.favourites.push({ id: celestialId });
    },
    removeFav: (state, celestialId: string) => {
      state.user.favourites = state.user.favourites.filter(
        fav => fav.id != celestialId
      );
    }
  },
  actions: {
    toggleFav: ({ commit, getters }, celestialId: string) => {
      // If the celestial is not faved
      if (!getters.isFav(celestialId)) {
        // ... favs it
        commit("addFav", celestialId);
      } else {
        // ...else unfavs
        commit("removeFav", celestialId);
      }
    }
  },
  modules: {
    toasts: {
      namespaced: true,
      state: toastStore.state,
      mutations: toastStore.mutations,
      actions: toastStore.actions
    }
  }
});
