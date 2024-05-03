import React from "react";
import Checkout from "../../_molecules/Checkout/Checkout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Checkout />
      {children}
    </div>
  );
};

export default MainLayout;
