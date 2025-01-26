const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        state.products = state.products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.products = [...state.products, { ...product, quantity: 1 }];
      }

      state.totalPrice = state.products.reduce((total, item) => {
        total = state.totalPrice + item.price;

        return total;
      }, 0);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
