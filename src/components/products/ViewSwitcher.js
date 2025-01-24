"use client";
import { LuLayoutGrid } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { TfiViewListAlt } from "react-icons/tfi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { PRODUCT_GRID_VIEW } from "@/constants/productView";
import { toggleProductView } from "@/redux/userPreferences/userPreferencesSlice";

function ProductViewSwitcher() {
  const { productView } = useSelector((state) => state.userPreferences);

  const dispatch = useDispatch();

  return (
    <div className="flex items-center px-3 dark:text-white">
      <button onClick={() => dispatch(toggleProductView())}>
        {productView === PRODUCT_GRID_VIEW ? (
          <BsGrid3X3Gap className="h-7 w-7" />
        ) : (
          <TfiViewListAlt className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}

export default ProductViewSwitcher;
