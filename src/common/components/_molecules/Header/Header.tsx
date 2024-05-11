import { ArrowIcon, BagIcon, EcoBazarIcon, HeartIcon, PinIcon } from "../../_atoms";
import Input from "../Input/input";

const Header = () => {
  return (
    <>
      <header className="flex w-[100%] bg-gray-900 shadow-md h-42">
        <div className="flex w-[1250px] justify-between m-auto">
          <div className="flex items-center h-[42px] text-gray-400 gap-2">
            <PinIcon width={18} height={15} />
            <p className="text-sm font-normal">
              Store Location: Lincoln- 334, Illinois, Chicago, USA
            </p>
          </div>

          <div className="flex items-center text-gray-400 gap-2 text-sm">
            <p className="flex gap-[6px]">
              Eng <ArrowIcon width={9} height={6} />
            </p>
            <p className="flex gap-[6px]">
              USD <ArrowIcon width={9} height={6} />
            </p>
            |<p>Sign In / Sign Up</p>
          </div>
        </div>
      </header>

      <section className="flex w-[1250px] m-auto h-[93px] ">
        <div className="flex items-center justify-between w-screen">
          <div className="flex items-center gap-[8px]">
            <EcoBazarIcon width={32} height={31} />
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
            <HeartIcon width={30} height={26} />
            |
            <BagIcon width={28} height={27} />
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
