import {
  ApplePay,
  DiscoverPay,
  FacebookIcon,
  InstagramIcon,
  MastercardPay,
  SecurePay,
  VisaPay,
} from "../_atoms";
import Plant from "../_atoms/Icon/Plant";
import Social from "../_atoms/Icon/Social";
import Twitter from "../_atoms/Icon/Twitter";
import { Button, Input } from "../_molecules";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-[530px] bg-[#1A1A1A] font-fontPoppins">
      <div className="h-[162px] bg-[#F7F7F7]">
        <div className="max-w-[1250px] mx-auto h-[165px] flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-0">
          <div className="w-[460px]">
            <p className="text-2xl font-semibold text-[#1A1A1A]">
              Subscribe our Newsletter
            </p>
            <p className="text-[#999999] text-sm">
              Pellentesque eu nibh eget mauris congue mattis mattis nec <br />
              tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="relative mx-28">
            <Input
              className="w-[340px] h-[50px] outline-none rounded-3xl px-6"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <Button
              onClick={() => console.log("Hello")}
              disabled={false}
              isLoading={false}
              height={50}
              type="submit"
              className="absolute font-semibold right-[-100px] rounded-3xl text-white px-8"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex ml-10 gap-2">
            <FacebookIcon width={40} height={40} />
            <Twitter width={40} height={40} />
            <Social width={40} height={40} />
            <InstagramIcon width={40} height={40} />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full md:max-w-[1250px] mx-auto  border-[#333333] border-b-2 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row py-10 md:py-14 gap-6 md:gap-[105px]">
            <div className="w-[336px]">
              <div className="flex gap-2 items-center">
                <Plant width={32} height={32} />
                <h1 className="text-white text-[32px] font-medium">Ecobazar</h1>
              </div>
              <p className="text-[#808080] text-sm py-4">
                Morbi cursus porttitor enim lobortis molestie. <br /> Duis
                gravida turpis dui, eget bibendum magna <br /> congue nec.
              </p>
              <div className="flex gap-4 text-white items-center">
                <p className="border-[#20B526] border-b-2 py-1">
                  (219) 555-0114
                </p>
                <p className="text-[#808080] text-base py-1">or</p>
                <p className="border-[#20B526] border-b-2 py-1">
                  Proxy@gmail.com
                </p>
              </div>
            </div>
            <div className="w-[100px]">
              <h1 className="text-base text-white font-medium">My Account</h1>
              <div className="grid mt-5 text-sm text-[#999999] gap-y-3">
                <p>My Account</p>
                <p>Order History</p>
                <h1 className="text-white">Shoping Cart</h1>
                <p>Wishlist</p>
              </div>
            </div>
            <div className="w-[130px]">
              <h1 className="text-base text-white font-medium">Helps</h1>
              <div className="grid mt-5 text-sm gap-y-3 text-[#999999]">
                <p>Contact</p>
                <p>Faqs</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="w-[85px]">
              <h1 className="text-white text-base font-medium">Proxy</h1>
              <div className="grid mt-5 text-sm gap-y-3 text-[#999999]">
                <p>About</p>
                <p>Shop</p>
                <p>Product</p>
                <p>Track Order</p>
              </div>
            </div>
            <div className="w-[130px]">
              <h1 className="text-white text-base font-medium">Categories</h1>
              <div className="grid mt-5 text-sm gap-y-3 text-[#999999]">
                <p>Fruit & Vegetables</p>
                <p>Meat & Fish</p>
                <p>Bread & Bakery</p>
                <p>Beauty & Health</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-5 items-center justify-between w-full md:max-w-[1250px] mx-auto mt-4 md:mt-0">
          <div>
            <p className="text-sm text-[#808080]">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-2">
            <ApplePay
              className="cursor-pointer rounded-md"
              width={45}
              height={31.76}
            />
            <VisaPay
              className="cursor-pointer rounded-md"
              width={45}
              height={31.76}
            />
            <DiscoverPay
              className="cursor-pointer rounded-md"
              width={45}
              height={31.76}
            />
            <MastercardPay
              className="cursor-pointer rounded-md"
              width={45}
              height={31.76}
            />
            <SecurePay
              className="cursor-pointer rounded-md"
              width={45}
              height={31.76}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
