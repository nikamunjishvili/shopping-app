import React from "react";
import Basket from "../../_molecules/Basket/Basket";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Basket />
      {children}
    </div>
  );
};

export default MainLayout;
