const {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PRODUCTS_ROUTE,
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
    label: "Courses",
    route: "/courses",
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
