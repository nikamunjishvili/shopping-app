import { Button, Input } from "../../../_molecules";

const Order = () => {
  return (
    <div className="w-[400px] h-[550px] border p-2 rounded-lg shadow-[#E6E6E6] shadow-sm">
      <div className="px-6">
        <h1 className="text-[#1A1A1A] text-xl font-medium">Order Summery</h1>
        <div className="flex justify-between w-full my-3">
          <div className="flex gap-1 items-center">
            <img
              className="w-[45px] h-[45px]"
              src="data:image/jpeg;base64,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"
            />
            <p className="text-[#1A1A1A] text-sm">Green Capsicum x5</p>
          </div>
          <h1 className="flex text-[#1A1A1A] text-sm items-center">$70.00</h1>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-1 items-center">
            <img
              className="w-[45px] h-[45px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-mQmcJzm9ncyTKa0OJBkFqgKwhO1FTOgUDBx6aawLw&s"
            />
            <p className="text-[#1A1A1A] text-sm">Green Capsicum x5</p>
          </div>
          <h1 className="flex text-[#1A1A1A] text-sm items-center">$70.00</h1>
        </div>
        <div className="flex w-full justify-between mt-3 border-b py-3">
          <p className="text-[#4D4D4D] text-sm">Subtotal:</p>
          <p className="font-medium text-[#1A1A1A] text-sm">$84.00</p>
        </div>
        <div className="flex w-full justify-between mt-3 border-b py-3">
          <p className="text-[#4D4D4D] text-sm">Shipping:</p>
          <p className="font-medium text-[#1A1A1A] text-sm">Free</p>
        </div>
        <div className="flex w-full justify-between mt-3 py-3">
          <p className="text-[#4D4D4D] text-sm">Total</p>
          <p className="font-semibold text-[#1A1A1A] text-sm">$84.00</p>
        </div>
        <h1 className="text-[#1A1A1A] text-xl font-medium mt-4">
          Payment Method
        </h1>
        <div className="flex gap-1 mt-4">
          <Input type="checkbox" />
          <p className="text-sm">Cash on Delivery</p>
        </div>
        <div className="flex gap-1 my-[10px]">
          <Input type="checkbox" />
          <p className="text-sm">Paypal</p>
        </div>
        <div className="flex gap-1">
          <Input type="checkbox" />
          <p className="text-sm">Amazon Pay</p>
        </div>
        <Button
          className="flex items-center justify-center my-6 rounded-[43px] bg-#00B207 w-full text-white font-bold"
          height={51}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Order;
