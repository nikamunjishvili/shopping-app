import { Link } from "react-router-dom";
import { HomeIcon } from "../../_atoms";
import Image from "../../_atoms/Image/Breadcrumbs-background-image.jpeg";

const Breadcrumbs = () => {
  return (
    <div
      className="flex items-center justify-center m-auto w-[100%] h-[120px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="w-[1250px] flex gap-5 items-center">
        <Link to={"/"}>
          <div className="py-3 hover:border-b-2 transition">
            <HomeIcon width={25} height={25} />
          </div>
        </Link>
        <Link to={"/Categories"}>
          <p className="text-white py-3 hover:border-b-2 transition">
            products
          </p>
        </Link>
        <Link to="/Billing">
          <p className="text-white hover:border-b-2 transition py-3">
            Checkout
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumbs;
