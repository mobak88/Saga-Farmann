import React, { ReactNode } from "react";
import Footer from "../footer/footer";
import Navbar from "../navigation/navbar/navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main {...props}>{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;
