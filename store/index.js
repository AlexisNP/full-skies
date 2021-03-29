export const state = () => ({
  user: {
    avatarUrl: '',
    favourites: []
  }
})

export const getters = {
  // Returns the number of favs for the user
  favCount: (state) => {
    return state.user.favourites.length
  },
  // Returns true if celestial is fav
  isFav: state => (celestialId) => {
    return state.user.favourites.find(fav => fav.id === celestialId)
  }
}

export const mutations = {
  addFav: (state, celestial) => {
    state.user.favourites.push(celestial)
  },
  removeFav: (state, celestial) => {
    state.user.favourites = state.user.favourites.filter(
      fav => fav.id !== celestial.id
    )
  }
}

export const actions = {
  toggleFav: ({ commit, getters }, celestial) => {
    // If the celestial is not faved
    if (!getters.isFav(celestial.id)) {
      commit('addFav', celestial)
    } else {
      commit('removeFav', celestial)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
