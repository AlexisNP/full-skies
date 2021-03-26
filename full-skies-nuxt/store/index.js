import toastStore from './toasts'

export default {
  state: () => ({
    user: {
      avatarUrl: '',
      favourites: []
    }
  }),
  getters: {
    // Returns the number of favs for the user
    favCount: (state) => {
      return state.user.favourites.length
    },
    // Returns true if celestial is fav
    isFav: state => (celestialId) => {
      return state.user.favourites.find(fav => fav.id === celestialId)
    }
  },
  mutations: {
    addFav: (state, celestialId) => {
      state.user.favourites.push({ id: celestialId })
    },
    removeFav: (state, celestialId) => {
      state.user.favourites = state.user.favourites.filter(
        fav => fav.id !== celestialId
      )
    }
  },
  actions: {
    toggleFav: ({ commit, getters }, celestialId) => {
      // If the celestial is not faved
      if (!getters.isFav(celestialId)) {
        // ... favs it
        commit('addFav', celestialId)
      } else {
        // ...else unfavs
        commit('removeFav', celestialId)
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
}
