import React, { ReactNode } from "react";

interface LightLayoutProps {
  children: React.ReactNode;
}

const LightLayout = ({ children }: LightLayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default LightLayout;
