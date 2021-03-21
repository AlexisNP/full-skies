export default {
  state: {
    queue: Array<{
      id: string;
      title: string;
      message: string;
      category: string;
      timer: number;
    }>()
  },
  mutations: {
    pushToast: (state: any, toast: any) => {
      state.queue.push(toast);
    },
    purgeToast: (state: any, toastId: string) => {
      state.queue = state.queue.filter((toast: any) => toast.id != toastId);
    }
  },
  actions: {
    pushToast: ({ commit }: any, toast: any) => {
      commit("pushToast", toast);
    },
    purgeToast: ({ commit }: any, toastId: string) => {
      commit("purgeToast", toastId);
    }
  }
};
