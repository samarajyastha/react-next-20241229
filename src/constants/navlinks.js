const {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PRODUCTS_ROUTE,
  PRODUCTS_CART_ROUTE,
} = require("./routes");

const navLinks = [
  {
    label: "Home",
    route: HOME_ROUTE,
  },
  {
    label: "About",
    route: ABOUT_ROUTE,
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
    label: "Users",
    route: "/users",
  },
  {
    label: "Blogs",
    route: "/blogs",
  },
  {
    label: "Contact",
    route: CONTACT_ROUTE,
  },
];

export default navLinks;
