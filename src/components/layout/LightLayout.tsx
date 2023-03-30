import React from "react";
import Footer from "../footer/Footer";

interface LightLayoutProps {
  children: React.ReactNode;
}

const LightLayout = ({ children }: LightLayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LightLayout;
