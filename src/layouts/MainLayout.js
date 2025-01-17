"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

function MainLayout({ children }) {
  return (
    <Provider store={store}>
      <Notification />
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}

export default MainLayout;
