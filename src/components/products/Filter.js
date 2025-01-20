"use client";

import { MdOutlineFilterAlt } from "react-icons/md";
import Modal from "../Modal";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterProducts() {
  const [showFilter, setShowFilter] = useState(false);
  const [sortFilter, setSortFilter] = useState(JSON.stringify({ createdAt: -1 }));
  const [limitFilter, setLimitFilter] = useState(10);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onChangeLimit(event) {
    setLimitFilter(event.target.value);
  }

  function onChangeSort(event) {
    console.log(event.target.value);
    setSortFilter(event.target.value);
  }

  function setFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortFilter);
    params.set("limit", limitFilter);

    router.push(pathname + "?" + params.toString());

    setShowFilter(false);
  }

  return (
    <div className="px-3">
      <button
        onClick={() => setShowFilter(true)}
        className="bg-primary-500 text-white p-2 rounded text-xl"
      >
        <MdOutlineFilterAlt />
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
              className="border w-4/5 bg-gray-50 dark:bg-gray-950 rounded py-1 px-2"
              onChange={onChangeLimit}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
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
