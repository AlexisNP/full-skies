export default {
  state: {
    queue: Array<{
      id: number;
      title: string;
      message: string;
      category: string;
      timer: number;
    }>()
  },
  mutations: {
    pushToast: (state: any, toast: any) => {
      state.queue.push(toast);
    }
  },
  actions: {
    pushToast: ({ commit }: any, toast: any) => {
      commit("pushToast", toast);
    }
  }
};
