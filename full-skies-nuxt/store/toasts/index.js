export default {
  state: () => {
    return {
      queue: []
    }
  },
  mutations: {
    pushToast: (state, toast) => {
      state.queue.push(toast)
    },
    purgeToast: (state, toastId) => {
      state.queue = state.queue.filter(toast => toast.id !== toastId)
    }
  },
  actions: {
    pushToast: ({ commit }, toast) => {
      commit('pushToast', toast)
    },
    purgeToast: ({ commit }, toastId) => {
      commit('purgeToast', toastId)
    }
  }
}
