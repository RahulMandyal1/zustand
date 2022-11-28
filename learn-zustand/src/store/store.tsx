import create from "zustand";

interface counterState {
  count: number;
  increaseCounter: () => any;
  decreaseCounter: () => void;
}

const useCounterStore = create<counterState>()((set) => ({
  count: 0,
  increaseCounter: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decreaseCounter: () =>
    set((state) => ({
      count: state.count - 1,
    })),
}));

export default useCounterStore;

