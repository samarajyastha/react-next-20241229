"use client";

import Modal from "../Modal";
import { LuFilterX } from "react-icons/lu";
import { MdOutlineFilterAlt } from "react-icons/md";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function FilterProducts({ brands, categories }) {
  const [showFilter, setShowFilter] = useState(false);

  const [brandsFilter, setBrandsFilter] = useState([]);
  const [category, setCategory] = useState("");
  const [limitFilter, setLimitFilter] = useState(10);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minPrice, setMinPrice] = useState(0);
  const [sortFilter, setSortFilter] = useState(
    JSON.stringify({ createdAt: -1 })
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onChangeLimit(event) {
    setLimitFilter(event.target.value);
  }

  function onChangeSort(event) {
    setSortFilter(event.target.value);
  }

  function handleBrandsFilterChange(brand) {
    setBrandsFilter((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand]
    );
  }

  function setFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", brandsFilter.join(","));
    params.set("category", category);
    params.set("limit", limitFilter);
    params.set("max", maxPrice);
    params.set("min", minPrice);
    params.set("sort", sortFilter);

    router.push(pathname + "?" + params.toString());

    setShowFilter(false);
  }

  function resetFilter() {
    setBrandsFilter([]);
    setCategory("");
    setLimitFilter(10);
    setMaxPrice(1000000);
    setMinPrice(0);

    router.push(PRODUCTS_ROUTE);
  }

  useEffect(() => {
    setFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="flex items-center">
      <select
        name="category"
        id="category"
        value={category}
        className="border bg-gray-50 dark:bg-gray-950 rounded py-1 h-10 px-5 w-full"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={() => setShowFilter(true)}
        className="bg-primary-500 text-white p-2 rounded text-xl h-10 w-14 mr-2 ml-5"
      >
        <MdOutlineFilterAlt className="m-auto" />
      </button>
      <button
        onClick={resetFilter}
        className="bg-red-500 text-white p-2 rounded text-xl h-10 w-14"
        title="Reset filter"
      >
        <LuFilterX className="m-auto" />
      </button>
      <Modal
        title={"Filter products"}
        show={showFilter}
        setShow={setShowFilter}
      >
        <div className="py-10">
          <div className="flex items-center justify-between py-2">
            <label htmlFor="sort" className="text-nowrap mr-3 font-semibold">
              Sort By:
            </label>
            <select
              name="sort"
              id="sort"
              className="border w-4/5 bg-gray-50 dark:bg-gray-950 rounded py-1 px-2"
              onChange={onChangeSort}
            >
              <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
              <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
              <option value={JSON.stringify({ price: 1 })}>
                Price: Low to High
              </option>
              <option value={JSON.stringify({ price: -1 })}>
                Price: High to Low
              </option>
            </select>
          </div>

          <div className="flex items-center justify-between py-2">
            <label htmlFor="limit" className="text-nowrap mr-3 font-semibold">
              Limit:
            </label>
            <select
              name="limit"
              id="limit"
              value={limitFilter}
              className="border w-4/5 bg-gray-50 dark:bg-gray-950 rounded py-1 px-2"
              onChange={onChangeLimit}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-2">
            <label htmlFor="price" className="text-nowrap mr-3 font-semibold">
              Price:
            </label>
            <div className="grid grid-cols-2 gap-5 items-center justify-between max:w-4/5">
              <div>
                <label htmlFor="minPrice" className="mr-2">
                  Min:
                </label>
                <input
                  type="number"
                  id="minPrice"
                  defaultValue={minPrice}
                  className="border bg-gray-50 dark:bg-gray-950 rounded py-1 px-2"
                  name="minPrice"
                  min={0}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="mr-2">
                  Max:
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  defaultValue={maxPrice}
                  className="border bg-gray-50 dark:bg-gray-950 rounded py-1 px-2"
                  name="maxPrice"
                  min={0}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <label htmlFor="brand" className="text-nowrap mr-3 font-semibold">
              Brand:
            </label>
            <div className="grid grid-cols-3 gap-2 w-full">
              {brands.map((brand) => (
                <div key={brand}>
                  <input
                    type="checkbox"
                    radioGroup="brand"
                    name={brand}
                    id={brand}
                    className="mr-2"
                    checked={brandsFilter.includes(brand)}
                    onChange={() => handleBrandsFilterChange(brand)}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 text-white rounded px-5 py-2"
            onClick={() => setShowFilter(false)}
          >
            Cancel
          </button>
          <button
            className="bg-primary-500 text-white rounded px-5 py-2"
            onClick={setFilter}
          >
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default FilterProducts;
