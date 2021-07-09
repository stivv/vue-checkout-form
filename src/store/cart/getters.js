export const getProducts = (state) => state.products;
export const getProductsTotal = (state) =>
  state.products.reduce((acc, cur) => acc + cur.price, 0);
