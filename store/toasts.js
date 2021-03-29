export const state = () => ({
  queue: []
})

export const mutations = {
  pushToast: (state, toast) => {
    state.queue.push(toast)
  },
  purgeToast: (state, toastId) => {
    state.queue = state.queue.filter(toast => toast.id !== toastId)
  }
}

export const actions = {
  pushToast: ({ commit }, toast) => {
    commit('pushToast', toast)
  },
  purgeToast: ({ commit }, toastId) => {
    commit('purgeToast', toastId)
  }
}

export default {
  state,
  mutations,
  actions
}
