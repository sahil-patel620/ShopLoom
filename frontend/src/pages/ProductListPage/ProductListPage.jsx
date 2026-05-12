import React, { useMemo } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import content from "../../data/content.json";
import Categories from "../../components/Filter/Categories";
import PriceFilter from "./../../components/Filter/PriceFilter";
import ColorsFilter from "../../components/Filter/ColorsFilter";
import SizeFilter from "../../components/Filter/SizeFilter";
import ProductCard from "./ProductCard";

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
  const categoryContent = useMemo(() => {
    return categories?.find((category) => category?.code === categoryType);
  }, [categoryType]);

  const productListItems = useMemo(() => {
    return content?.products?.filter(
      (product) => product?.category_id === categoryContent?.id,
    );
  }, [categoryContent]);

  return (
    <div>
      <div className="flex ">
        <div className="w-[20%] p-3 border border-gray-100 rounded-lg  m-5">
          {/* filters */}
          <div className="flex justify-between items-center">
            <p className="text-[16px] text-gray-600">Filters</p>
            <HiAdjustmentsHorizontal className="text-2xl text-gray-600" />
          </div>

          <div>
            <p className="text-black text-[16px] mt-5">Category</p>
            <Categories types={categoryContent?.types} />
            <hr className="text-gray-300" />
          </div>
          <div>
            {/* priceFilter */}
            <PriceFilter />
            <hr className="text-gray-300" />

            {/* colorsFilter */}
            <ColorsFilter colors={categoryContent?.meta_data?.colors} />
            <hr className="text-gray-300" />
            {/* sizeFilter */}
            <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
          </div>
          <div></div>
        </div>

        <div className="p-3.75">
          {/* product list */}
          <p className="text-black text-lg">{categoryContent?.description}</p>
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {productListItems?.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
