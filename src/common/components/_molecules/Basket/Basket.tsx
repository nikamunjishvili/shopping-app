import { useState } from "react";
import close from "../../../../../public/Close.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useCart } from "../../../../context/ProductsContext";
import { ProductType } from "../../../types";

const Basket = () => {
  const { productList, setProductList } = useCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    productList.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {} as { [key: string]: number })
  );

  const handleQuantityChange = (productId: string, increment: number) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) + increment;
      return {
        ...prevQuantities,
        [productId]: newQuantity > 0 ? newQuantity : 0,
      };
    });
  };

  const calculateSubtotal = (productId: string) => {
    const product = productList.find((product) => product.id === productId);
    return product ? product.price * (quantities[productId] || 0) : 0;
  };

  const calculateTotal = () => {
    return productList.reduce(
      (total, product) => total + calculateSubtotal(product.id),
      0
    );
  };

  const deleteItem = (product: ProductType) => {
    setProductList((prev) => prev.filter((item) => item.id !== product.id));
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[product.id];
      return newQuantities;
    });
  };

  return (
    <div className="w-[100%] m-auto flex flex-col justify-center items-center">
      <h1 className="p-8 text-[32px] font-semibold">My Shopping Cart</h1>
      <div className="w-[872px] h-[810px] flex flex-col justify-between items-center 2xl:h-[487px] 2xl:w-[1250px] 2xl:flex-row 2xl:items-start mb-[80px]">
        <div className="w-[872px] h-[487px] flex flex-col justify-between">
          <div className="w-[830px] h-[371px] bg-white rounded-lg border-[1px] flex flex-col justify-between">
            <div className="w-[872xp] h-[42px] border-[1px] rounded-t-lg flex items-center text-sm text-gray-600 font-medium">
              <p className="text-button-250 text-[14px] ml-[23px]">PRODUCT</p>
              <p className="text-button-250 text-[14px] ml-[283px]">PRICE</p>
              <p className="text-button-250 text-[14px] ml-[76px]">QUANTITY</p>
              <p className="text-button-250 text-[14px] ml-[108px]">SUBTOTAL</p>
            </div>
            <div className="w-[screen] h-[244px] overflow-y-auto">
              {productList.map((product) => (
                <div key={product.id} className="w-[screen] h-[122px] flex items-center justify-center">
                  <div className="flex items-center justify-between w-[780px]">
                    <div className="w-[250px] flex items-center gap-[12px]">
                      <img src={product.image} className="w-[100px] h-[100px]" />
                      <p className="text-base">{product.title}</p>
                    </div>
                    <div className="w-[430px] flex justify-between items-center">
                      <p>{product.price}</p>
                      <div className="w-[124px] h-[50px] rounded-3xl border-[2px] flex items-center justify-center">
                        <div className="flex items-center justify-between w-[110px]">
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="w-[34px] h-[34px] bg-button-100 rounded-full"
                          >
                            -
                          </button>
                          <p>{quantities[product.id]}</p>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="w-[34px] h-[34px] bg-button-100 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p>${calculateSubtotal(product.id).toFixed(2)}</p>
                      <button onClick={() => deleteItem(product)}>
                        <img src={close} width={24} height={24} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[872xp] h-[85px] border-[1px] rounded-b-lg flex items-center">
              <Link className="text-sm font-semibold ml-[18px] rounded-[46px] bg-button-100 h-[45px] w-[151px] flex items-center justify-center" to={"/Categories"}>
                Return to shop
              </Link>
              <button className="text-sm font-semibold ml-[483px] rounded-[46px] bg-button-100 h-[45px] w-[151px]">
                Update Cart
              </button>
            </div>
          </div>
          <div className="w-[830px] h-[92px] bg-white rounded-lg border-[1px] flex items-center justify-center">
            <div className="flex items-center justify-between w-[767px]">
              <p className="text-[20px] font-medium right-[10px]">
                Coupon Code
              </p>
              <div className="flex flex-row w-[600px] relative">
                <input
                  className="border-[1px] rounded-[46px] h-[52px] w-[531px] outline-none p-6"
                  type="text"
                  placeholder="Enter code"
                />
                <button className="w-[196px] h-[52px] bg-button-50 rounded-[43px] text-white absolute right-[1px]">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[296px] bg-white rounded-lg border-[1px] flex flex-col items-center justify-center">
          <div className="w-[340px] h-[250px] flex flex-col justify-between">
            <div>
              <p className="text-[20px] font-medium">Cart Total</p>
            </div>
            <div className="h-[140px] flex flex-col justify-between">
              <div className="flex justify-between border-b-[1px] h-[35px]">
                <p className="text-button-200 text-[14px]">Subtotal:</p>
                <p className="text-[14px] font-medium">${calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-b-[1px] h-[35px]">
                <p className="text-button-200 text-[14px]">Shipping:</p>
                <p className="text-[14px] font-medium">Free</p>
              </div>
              <div className="flex justify-between h-[35px]">
                <p className="text-button-200 text-[16px]">Total:</p>
                <p className="text-[16px] font-semibold">${calculateTotal().toFixed(2)}</p>
              </div>
            </div>
            <Link to="/Billing">
              <Button
                height={51}
                className="flex items-center justify-center bg-button-150 w-[340px] rounded-[43px] text-white font-semibold"
              >
                Proceed to checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
