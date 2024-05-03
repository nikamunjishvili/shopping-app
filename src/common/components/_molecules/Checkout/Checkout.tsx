import shop from '../../../../../public/shop.svg'
const Checkout = () => {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="p-8 text-[32px] font-semibold">
          My Shopping Cart
        </h1>
        <div className="h-[810px] w-[872px] flex flex-col justify-between items-center 2xl:h-[487px] 2xl:w-[1320px] 2xl:flex-row 2xl:items-start">
          <div className="w-[872px] h-[487px] flex flex-col justify-between">
            <div className="w-[872px] h-[371px] bg-white rounded-lg border-[1px] flex flex-col justify-between">
              <div className="w-[872xp] h-[42px] border-[1px] rounded-t-lg flex items-center text-sm text-gray-600 font-medium">
                <p className="text-button-250 text-[14px] ml-[18px]">PRODUCT</p>
                <p className="text-button-250 text-[14px] ml-[305px]">PRICE</p>
                <p className="text-button-250 text-[14px] ml-[80px]">QUANTITY</p>
                <p className="text-button-250 text-[14px] ml-[127px]">SUBTOTAL</p>
              </div>
              <img src={shop} width={200} height={200} className="ml-[320px]"/>
              <div className="w-[872xp] h-[85px] border-[1px] rounded-b-lg flex items-center">
                <button className="text-sm font-semibold ml-[18px] rounded-[46px] bg-button-100 h-[45px] w-[151px]">
                  Return to shop
                </button>
                <button className="text-sm font-semibold ml-[530px] rounded-[46px] bg-button-100 h-[45px] w-[151px]">
                  Update Cart
                </button>
              </div>
            </div>
            <div className="w-[872px] h-[92px] bg-white rounded-lg border-[1px] flex items-center justify-center">
              <div className="flex items-center justify-between w-[830px]">
              <p className="text-[20px] font-medium right-[10px]">
                Coupon Code
              </p>
              <div className="flex flex-row w-[668px] relative">
               <input className="border-[1px] rounded-[46px] h-[52px] w-[531px] outline-none p-6"
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
          <div className="w-[424px] h-[296px] bg-white rounded-lg border-[1px] flex flex-col items-center justify-center">
            <div className="w-[367px] h-[250px] flex flex-col justify-between">
            <div>
              <p className="text-[20px] font-medium">
                Cart Total
              </p>
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
            <button className="bg-button-150 w-[376px] h-[51px] rounded-[43px]  text-white font-semibold">
              Proceed to checkout
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Checkout;