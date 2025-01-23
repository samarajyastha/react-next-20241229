"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useDebounce } from "use-debounce";

function SearchProducts() {
  const [name, setName] = useState("");
  const [delayedName] = useDebounce(name, 300);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("name", name);

    router.push(pathname + "?" + params.toString());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayedName]);
  return (
    <div className="flex items-center">
      <label
        htmlFor="name"
        className="whitespace-nowrap mr-2 bg-slate-200 dark:bg-slate-900 dark:text-white h-10 rounded flex items-center px-3"
      >
        <RiSearchLine className="mr-2" />
        All Products:
      </label>
      <input
        id="name"
        name="name"
        type="search"
        className="border bg-gray-50 dark:bg-gray-950 rounded py-1 px-3 h-10 w-full"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default SearchProducts;
