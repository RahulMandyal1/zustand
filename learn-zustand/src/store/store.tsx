import create from "zustand";

interface counterState {
  count: number;
  increaseCounter: (num: number) => void;
  decreaseCounter: (num: number) => void;
}

const useCounterStore = create<counterState>()((set) => ({
  count: 0,
  increaseCounter: (num) =>
    set((state) => ({
      count: num ? state.count + num : state.count + 1,
    })),
  decreaseCounter: (num) =>
    set((state) => ({
      count: num ? state.count - num : state.count - 1,
    })),
}));

export default useCounterStore;
