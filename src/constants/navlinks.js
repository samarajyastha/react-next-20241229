const {
  HOME_ROUTE,
  PRODUCTS_ROUTE,
  PRODUCTS_CART_ROUTE,
  ORDERS_ROUTE,
} = require("./routes");

const navLinks = [
  {
    label: "Home",
    route: HOME_ROUTE,
  },
  {
    label: "Products",
    route: PRODUCTS_ROUTE,
  },
  {
    label: "Cart",
    route: PRODUCTS_CART_ROUTE,
  },
  {
    label: "Orders",
    route: ORDERS_ROUTE,
  },
];

export default navLinks;
