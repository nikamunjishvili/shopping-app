import { createContext, useContext, useState } from "react";
import { ContextProps, ProductType } from "../common/types";

const ProductsContext = createContext<ContextProps>({
  productList: [],
  setProductList: () => {},
  addProducts: () => {},
});

export const useCart = () => useContext(ProductsContext);

const ProductsContextProvider = ({ children }: any) => {
  const [productList, setProductList] = useState<ProductType[]>([]);

  const addProducts = (product: ProductType) => {
    setProductList((prev) => [...prev, product]);
  };
  return (
    <ProductsContext.Provider
      value={{ addProducts, productList, setProductList }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
