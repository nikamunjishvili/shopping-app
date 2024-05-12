import { useState } from "react";
import red from "../../../../../public/red.svg";
import close from "../../../../../public/Close.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Basket = () => {
  const [quantity, setQuantity] = useState(0);

  const increasequantity = () => {
    setQuantity(quantity + 1);
  };

  const decreasequantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
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
            <div className="w-[screen] h-[244px]">
              <div className="w-[screen] h-[122px] flex items-center justify-center">
                <div className="flex items-center justify-between w-[780px]">
                  <div className="w-[250px] justify-between flex items-center">
                    <img src={red} width={100} height={100} />
                    <p className="text-base">Red Capsicum</p>
                  </div>
                  <div className="w-[430px] flex justify-between items-center">
                    <p>$14.00</p>
                    <div className="w-[124px] h-[50px] rounded-3xl border-[2px] flex items-center justify-center">
                      <div className="flex items-center justify-between w-[110px]">
                        <button
                          onClick={decreasequantity}
                          className="w-[34px] h-[34px] bg-button-100 rounded-full"
                        >
                          -
                        </button>
                        <p>{quantity}</p>
                        <button
                          onClick={increasequantity}
                          className="w-[34px] h-[34px] bg-button-100 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p>$70.00</p>
                    <button>
                      <img src={close} width={24} height={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[872xp] h-[85px] border-[1px] rounded-b-lg flex items-center">
              <button className="text-sm font-semibold ml-[18px] rounded-[46px] bg-button-100 h-[45px] w-[151px]">
                Return to shop
              </button>
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
                <p className="text-[14px] font-medium">$0.00</p>
              </div>
              <div className="flex justify-between border-b-[1px] h-[35px]">
                <p className="text-button-200 text-[14px]">Shipping:</p>
                <p className="text-[14px] font-medium">Free</p>
              </div>
              <div className="flex justify-between h-[35px]">
                <p className="text-button-200 text-[16px]">Total:</p>
                <p className="text-[16px] font-semibold">$0.00</p>
              </div>
            </div>
            <Link to="/Billing">
              <Button
                height={51}
                className="flex items-center justify-center bg-button-150 w-[340px] rounded-[43px]  text-white font-semibold"
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
