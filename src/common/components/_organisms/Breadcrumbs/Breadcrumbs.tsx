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
      <div className="w-[1250px] flex gap-[10px]">
        <Link to={"/"}>
          <HomeIcon width={25} height={25} />
        </Link>
        <Link to={"/Categories"} className="text-white">
          products
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumbs;
