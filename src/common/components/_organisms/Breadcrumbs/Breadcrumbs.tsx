import { Link } from "react-router-dom";
import { HomeIcon } from "../../_atoms";
import Image from "../../_atoms/Icon/dfc856fb9007b5c00e2c30ed1519c7d1.jpeg";

const Breadcrumbs = () => {
  return (
    <div
      className="flex items-center gap-[10px] px-[200px] w-[100%] h-[120px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
          <HomeIcon />
          <Link to={"/Categories"} className="text-white">
            products
          </Link>
    </div>
  );
};

export default Breadcrumbs;
