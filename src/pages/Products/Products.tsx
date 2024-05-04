import { Button } from "../../common/components/_molecules";
import Breadcrumbs from "../../common/components/_organisms/Breadcrumbs/Breadcrumbs";
import useFetch from "../../common/hooks/useFetch";
import { ProductType } from "../../common/types";

const Products = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch<ProductType[]>("https://fakestoreapi.com/products");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const quantity = products ? products.length : 0;

  return (
    <div className="flex flex-col gap-[50px]">
      <Breadcrumbs />
      <div className="flex flex-col px-[220px] gap-[20px]">
        <div className="flex justify-between">
          <Button
            className={
              "bg-[#00B207] flex items-center justify-between w-[131px] h-[45px] rounded-[43px] text-white px-[32px] py-[14px]"
            }
            children={"Filter"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            height={0}
            type={"submit"}
            disabled={false}
            isLoading={false}
          />
          <div>{quantity} Results Found</div>
        </div>
        <div className="flex justify-between">
          <div>Categories</div>
          <div className="grid grid-cols-3 gap-[15px] w-[984px]">
            {products &&
              products.map((product) => (
                <div
                  key={product.id}
                  className="border-2 border-black rounded-[8px]"
                >
                  <img
                    className="w-[302px] h-[302px]"
                    src={product.image}
                    alt=""
                  />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
