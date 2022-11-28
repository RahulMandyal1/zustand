import create from "zustand";

//type for the state of products
interface productsState {
  products: {
    isLoading: boolean;
    data: any;
    error: {
      message: string | null;
    };
  };
  fetchProducts: () => void;
}

const useProductsStore = create<productsState>()((set) => ({
  products: {
    isLoading: false,
    data: null,
    error: {
      message: null,
    },
  },

  fetchProducts: async () => {
    try {
      //set initially data to loading
      set((state) => ({
        products: {
          ...state.products,
          isLoading: true,
        },
      }));
      const { products } = await (
        await fetch("https://dummyjson.com/products")
      ).json();

      //update once we get the data
      set((state) => ({
        products: {
          ...state.products,
          data: products,
          isLoading: false,
        },
      }));
    } catch (err) {
      //update state if we got an error
      set((state) => ({
        products: {
          ...state.products,
          error: {
            message: "there is an error ",
          },
        },
      }));
    }
  },
}));

export default useProductsStore;
