export default {
  addProduct: (state) => {
    const len = state.products.length + 1;
    state.products = [
      { name: "product " + len, price: 15 + len },
      ...state.products,
    ];
  },
  removeProduct: (state, payload) => {
    state.products = state.products.filter((product, idx) => idx !== payload);
  },
};
