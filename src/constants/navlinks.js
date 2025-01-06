const { HOME_PAGE, ABOUT_PAGE, CONTACT_PAGE } = require("./routes");

const navLinks = [
  {
    label: "Home",
    route: HOME_PAGE,
  },
  {
    label: "About",
    route: ABOUT_PAGE,
  },
  {
    label: "Products",
    route: "/products",
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
    label: "Contact",
    route: CONTACT_PAGE,
  },
];

export default navLinks;
