import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../common/hooks/useFetch";
import { ProductType } from "../../common/types";
import FilterIcon from "../../common/components/_atoms/Icon/filter/FilterIcon";
import { Button, Input } from "../../common/components/_molecules";
import Breadcrumbs from "../../common/components/_organisms/Breadcrumbs/Breadcrumbs";
import {
  DownArrow,
  ProductCart,
  UpArrow,
} from "../../common/components/_atoms";

const Products = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const {
    data: products,
    loading,
    error,
  } = useFetch<ProductType[]>("https://fakestoreapi.com/products");

  if (loading) {
    return (
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
      />
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products) {
    return null;
  }

  const quantity = products.length;

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(product.category);
  });

  return (
    <div className="flex flex-col gap-[50px]">
      <Breadcrumbs />
      <div className="flex flex-col w-[1250px] m-auto gap-[20px]">
        <div className="flex justify-between">
          <div className="flex bg-[#00B207] items-center rounded-[43px] text-white px-[25px] py-3 gap-3">
            <Button
              children={"Filter"}
              height={0}
              type={"submit"}
              disabled={false}
              isLoading={false}
              className="flex items-center"
            />
            <FilterIcon width={20} height={20} />
          </div>
          <div>{quantity} Results Found</div>
        </div>
        <div className="flex justify-between">
          <div className=" w-[250px]">
            <div className="flex justify-between items-center">
              <p className="text-xl font-medium text-#1A1A1A">All Categories</p>
              {showCategories ? (
                <DownArrow
                  onClick={() => setShowCategories(!showCategories)}
                  className="cursor-pointer"
                  width={20}
                  height={20}
                />
              ) : (
                <UpArrow
                  onClick={() => setShowCategories(!showCategories)}
                  className="cursor-pointer"
                  width={20}
                  height={20}
                />
              )}
            </div>
            {showCategories && (
              <div className="my-3">
                {products &&
                  [...new Set(products.map((product) => product.category))].map(
                    (category) => (
                      <div className="flex gap-2 items-center" key={category}>
                        <Input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <p className="text-base text-#1A1A1A">{category}</p>
                        <p className="text-#808080 font-extralight">
                          (
                          {
                            products.filter((p) => p.category === category)
                              .length
                          }
                          )
                        </p>
                      </div>
                    )
                  )}
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-[15px] w-[984px]">
            {filteredProducts.map((product) => (
              <Link
                to={`/Categories/${product.id}`}
                key={product.id}
                className="border-2 border-[#E6E6E6] rounded-[8px]"
              >
                <img
                  className="w-[280px] h-[280px] m-auto"
                  src={product.image}
                  alt=""
                />
                <div className="flex px-[16px] justify-between items-center">
                  <div className="w-[230px] flex flex-col gap-[5px]">
                    <h2>{product.title}</h2>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                  <div
                    className={
                      "w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#F2F2F2]"
                    }
                  >
                    <ProductCart stroke={"#1A1A1A"} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
