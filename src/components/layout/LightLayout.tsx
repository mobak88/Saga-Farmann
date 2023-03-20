import React, { ReactNode } from "react";
import Navbar from "../navigation/navbar/navbar";

interface LightLayoutProps {
  children: React.ReactNode;
}

const LightLayout = ({ children }: LightLayoutProps) => {
  return (
    <>
      <Navbar lightNavbar={true} />
      <main>{children}</main>
    </>
  );
};

export default LightLayout;
