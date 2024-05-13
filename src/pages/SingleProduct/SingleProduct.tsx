import { useParams } from "react-router-dom";
import { ProductCart } from "../../common/components/_atoms";
import { Button } from "../../common/components/_molecules";
import Breadcrumbs from "../../common/components/_organisms/Breadcrumbs/Breadcrumbs";
import useFetch from "../../common/hooks/useFetch";
import { ProductType } from "../../common/types";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch<ProductType>(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-[70px]">
      <Breadcrumbs />
      <div className=" m-auto">
        {product && (
          <div key={product.id} className="w-[1250px] flex justify-between">
            <img
              className="w-[556px] h-[556px]"
              src={product.image}
              alt={product.title}
            />
            <div className="w-[647px] flex flex-col gap-[20px]">
              <div className="border-2 border-white border-b-[#E6E6E6] w-[647px]">
                <h2 className="text-[36px] font-semibold leading-[43px]">
                  {product.title}
                </h2>
                <p className="text-[24px] font-medium text-[#2C742F]">
                  ${product.price}
                </p>
              </div>
              <div className="w-[568px]">
                <span className="text-[#808080] text-[14px]">
                  {product.description}
                </span>
              </div>
              <div className="border-2 border-white border-y-[#E6E6E6] w-[511px] h-[88px] flex items-center">
                <Button
                  className={
                    "w-[447px] rounded-full flex justify-center items-center text-[#FFFFFF]"
                  }
                  onClick={() => {}}
                  disabled={false}
                  isLoading={false}
                  type="submit"
                  height={51}
                >
                  {"Add to cart"}
                  <ProductCart stroke={"#FFFFFF"} />
                </Button>
              </div>
              <div className="w-[256px]">
                <span className="text-[14px]">
                  Category:{" "}
                  <small className="text-[#808080] text-[14px]">
                    {product.category}
                  </small>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
