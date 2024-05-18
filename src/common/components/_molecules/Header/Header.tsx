import { Link } from "react-router-dom";
import {
  ArrowIcon,
  BagIcon,
  EcoBazarIcon,
  HeartIcon,
  Phone,
  PinIcon,
} from "../../_atoms";
import Input from "../Input/input";
import { useCart } from "../../../../context/ProductsContext";

const Header = () => {
  const { productList } = useCart();

  const getTotalPrice = () => {
    return productList.reduce((total, product) => total + product.price, 0);
  };

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
            <p className="flex gap-[6px] items-center">
              Eng <ArrowIcon width={9} height={6} />
            </p>
            <p className="flex gap-[6px] items-center">
              USD <ArrowIcon width={9} height={6} />
            </p>
            <div className="flex gap-3">
              <Link to="/pages/sign-in">
                <p className="cursor-pointer">Sign In</p>
              </Link>
              <Link to="/pages/sign-up">
                <p className="cursor-pointer">Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="flex w-[1250px] m-auto h-[93px]">
        <div className="flex items-center justify-between w-screen">
          <div className="flex items-center gap-[8px]">
            <EcoBazarIcon width={32} height={31} />
            <p className="text-[32px] font-medium">Ecobazar</p>
          </div>
          <div className="flex">
            <Input
              size="large"
              className="w-[498px] h-[45px] rounded-tl-[6px] rounded-bl-[6px] rounded-tr-none rounded-br-none border-gray-[1px] border
            border-gray-300 bg-search bg-no-repeat bg-center bg-left-custom pl-[44px]"
              placeholder="Search"
              type="search"
              name="search"
            />
            <button className="bg-green-500 w-[98px] h-[45px] rounded-tl-none rounded-br-lg text-white">
              Search
            </button>
          </div>
          <div className="flex gap-[16px] items-center relative">
            <HeartIcon width={30} height={26} />
            |
            <BagIcon width={28} height={27} className=""/>
            <span className="rounded-[16px] bg-[#2C742F] w-[18px] h-[18px] flex justify-center items-center text-[10px] text-white font-medium leading-[10px] absolute left-[78px] top-[5px]">{productList.length}</span>
            <div>
              <p>Shopping Cart:</p>
              <p>${getTotalPrice().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div className="flex py-[15px] w-[1250px] m-auto justify-between">
        <div className="flex gap-[16px]">
          <p className="flex gap-[6px] items-center">
            Home <ArrowIcon width={9} height={6} />
          </p>
          <p className="flex gap-[6px] items-center">
            Shop <ArrowIcon width={9} height={6} />
          </p>
          <p className="flex gap-[6px] items-center">
            Pages <ArrowIcon width={9} height={6} />
          </p>
          <p className="flex gap-[6px] items-center">
            Blog <ArrowIcon width={9} height={6} />
          </p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="flex gap-[10px]">
          <Phone width={23} height={23} />
          <p>(219) 555-014</p>
        </div>
      </div>
    </>
  );
};

export default Header;
