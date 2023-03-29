import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navigation/navbar/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main {...props}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
