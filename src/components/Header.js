import config from "@/config/config";
import navLinks from "@/constants/navlinks";
import { HOME_PAGE } from "@/constants/routes";
import Link from "next/link";

function Header() {
  return (
    <header className="shadow sticky top-0">
      <div className="antialiased bg-gray-100 dark:bg-gray-950">
        <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-900">
          <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row">
            <div className="flex flex-row items-center justify-between p-4">
              <Link
                href={HOME_PAGE}
                className="text-lg font-semibold font-nunito-extra-bold tracking-widest text-primary-500 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
              >
               {config.appName}
              </Link>
              <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
              {navLinks.map((navlink) => (
                <Link
                  key={navlink.route}
                  className="px-4 py-2 mt-2 text-sm font-semibold font-nunito bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-primary-100 focus:bg-primary-100 focus:outline-none focus:shadow-outline"
                  href={navlink.route}
                >
                  {navlink.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
