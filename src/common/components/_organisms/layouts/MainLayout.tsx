import React from "react";
import { Header } from "../../_molecules";
import Footer from "../../_molecules/footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;