import FacebookIcon from "../_atoms/Icon/Facebook";
import Instagtam from "../_atoms/Icon/Instagtam";
import Social from "../_atoms/Icon/Social";
import Twitter from "../_atoms/Icon/Twitter";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-[530px] bg-[#1A1A1A] font-fontPoppins">
      <div className="h-[162px] bg-[#F7F7F7]">
        <div className="w-[1250px] border border-black h-[165px] items-center flex m-auto">
          <div className="w-[460px]">
            <p className="text-2xl font-semibold text-[#1A1A1A]">
              Subcribe our Newsletter
            </p>
            <p className="text-[#999999] text-sm">
              Pellentesque eu nibh eget mauris congue mattis mattis nec <br />{" "}
              tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="relative mx-28">
            <input
              className="w-[340px] h-[50px] outline-none rounded-3xl px-6"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <button className="absolute font-semibold right-[-100px] h-[50px] bg-[#00B207] rounded-3xl text-white px-8">
              Subscribe
            </button>
          </div>
          <div className="flex ml-10 gap-2">
            <FacebookIcon width={40} height={40} />
            <Twitter width={40} height={40} />
            <Social width={40} height={40} />
            <Instagtam width={40} height={40} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
