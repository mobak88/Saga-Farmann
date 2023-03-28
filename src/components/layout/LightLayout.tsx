import React, { ReactNode } from "react";
import Footer from "../footer/footer";

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
