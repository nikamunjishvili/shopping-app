import Pin from "../../../../../public/Map Pin.svg";
import Arrow from "../../../../../public/Vector.svg";
import Eco from "../../../../../public/EcoBazar.svg";
import Heart from "../../../../../public/Heart.svg";
import Bag from "../../../../../public/Bag.svg";
import Input from "../Input/input";
const Header = () => {
  return (
    <>
      <header className="flex w-[100%] bg-gray-900 shadow-md h-42 justify-around m-auto">
        <div className="flex items-center h-[42px] text-gray-400 gap-2">
          <img src={Pin} width={18} height={15} />
          <p className="text-sm font-normal">
            Store Location: Lincoln- 334, Illinois, Chicago, USA
          </p>
        </div>

        <div className="flex items-center text-gray-400 gap-2 text-sm">
          <p className="flex gap-[6px]">
            Eng <img src={Arrow} />
          </p>
          <p className="flex gap-[6px]">
            USD <img src={Arrow} />
          </p>
          |<p>Sign In / Sign Up</p>
        </div>
      </header>

      <section className="flex w-[1250px] m-auto h-[93px] ">
        <div className="flex items-center justify-between w-screen">
          <div className="flex items-center gap-[8px]">
            <img src={Eco} width={32} />
            <p className="text-[32px] font-medium">Ecobazar</p>
          </div>

          <div className="flex">
            <Input
              className="w-[498px] h-[45px] rounded-tl-[6px] rounded-bl-[6px] rounded-tr-none rounded-br-none border-gray-[1px] border
            border-gray-300 bg-search bg-no-repeat bg-center bg-left-custom pl-[44px]"
              placeholder="Search"
              type="search"
              name="search"
            ></Input>
            <button className="bg-green-500 w-[98px] h-[45px] rounded-tl-none rounded-br-lg text-white">
              Search
            </button>
          </div>

          <div className="flex gap-[16px] items-center">
            <img src={Heart} />
            |
            <img src={Bag} />
            <div>
              <p>Shopping Cart:</p>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
