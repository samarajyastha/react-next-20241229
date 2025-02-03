"use client";

import Link from "next/link";
import config from "@/config/config";
import navLinks from "@/constants/navlinks";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { ImUser } from "react-icons/im";
import {
  MdLogout,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { LIGHT_MODE } from "@/constants/theme";
import { RxCross2 } from "react-icons/rx";
import { logoutUser } from "@/redux/auth/authSlice";
import { toggleTheme } from "@/redux/userPreferences/userPreferencesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchProducts from "./products/Search";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.userPreferences);

  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  function toggleShowProfile() {
    setShowProfile(!showProfile);
  }

  function logout() {
    dispatch(logoutUser());
    router.push(LOGIN_ROUTE);
    setShowProfile(false);
  }

  function switchTheme() {
    dispatch(toggleTheme());
  }

  useEffect(() => {}, [showProfile]);

  return (
    <header className="shadow sticky top-0 z-10">
      <div className="antialiased bg-gray-100 dark:bg-gray-950">
        <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-900">
          <div className="grid grid-cols-[1fr,auto] max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row">
            <div className="flex flex-row items-center justify-between p-4">
              <Link
                href={HOME_ROUTE}
                className="text-lg font-semibold font-nunito-extra-bold tracking-widest text-primary-500 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
              >
                {config.appName}
              </Link>
              <div className="flex items-center md:hidden ">
                <button onClick={switchTheme} className="mx-2 p-2">
                  {theme == LIGHT_MODE ? (
                    <MdOutlineDarkMode className="h-5 w-5" />
                  ) : (
                    <MdOutlineLightMode className="h-5 w-5" />
                  )}
                </button>

                <button
                  className="rounded-lg focus:outline-none focus:shadow-outline"
                  onClick={() => setShowMobileMenu(true)}
                >
                  <HiMenuAlt3 className="h-7 w-7" />
                </button>
              </div>
            </div>
            <nav className="flex-col hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row items-center">
              {navLinks.map((navlink) => {
                if (navlink.isAuth && !user)
                  return <div key={navlink.route}></div>;

                return (
                  <Link
                    key={navlink.route}
                    className="px-4 py-2 mt-2 text-sm font-semibold font-nunito bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-primary-100 focus:bg-primary-100 focus:outline-none focus:shadow-outline"
                    href={navlink.route}
                  >
                    {navlink.label}
                  </Link>
                );
              })}

              <button onClick={switchTheme} className="mx-2">
                {theme == LIGHT_MODE ? (
                  <MdOutlineDarkMode className="w-5 h-5" />
                ) : (
                  <MdOutlineLightMode className="w-5 h-5" />
                )}
              </button>

              {user ? (
                <div className="relative">
                  <button
                    className="p-2 hover:bg-slate-100 hover:dark:bg-gray-800"
                    onClick={toggleShowProfile}
                  >
                    {user.profileImageUrl ? (
                      <Image
                        src={user.profileImageUrl}
                        alt="profile-img"
                        width={32}
                        height={32}
                        className="rounded-full h-8 w-8"
                      />
                    ) : (
                      <ImUser className=" rounded-full border" />
                    )}
                  </button>
                  <div
                    className={`${
                      showProfile ? "block" : "hidden"
                    } w-40 py-3 px-3 rounded-xl bg-gray-50 dark:bg-gray-800 absolute top-10 right-0 shadow`}
                    onClick={() => setShowProfile(false)}
                  >
                    <h3 className="mb-2 font-semibold ">Hi! {user.name}</h3>

                    <Link
                      href={"/profile/edit"}
                      className="bg-slate-200 text-black w-full rounded py-1 flex items-center justify-center my-3"
                    >
                      Profile
                    </Link>

                    <button
                      className="bg-primary-500 text-white w-full rounded py-1 flex items-center justify-center"
                      onClick={logout}
                    >
                      Logout
                      <MdLogout className="ml-2" />
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href={LOGIN_ROUTE}
                  className="px-4 py-2 mt-2 text-sm font-semibold font-nunito bg-primary-500 text-white rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600  md:mt-0 md:ml-4 hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:shadow-outline"
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`${
          showMobileMenu ? "block" : "hidden"
        } md:hidden absolute top-0 right-0 bottom-0 w-full bg-slate-300 dark:bg-slate-700  bg-opacity-50 dark:bg-opacity-50 h-svh z-40`}
        onClick={() => setShowMobileMenu(false)}
      >
        <div className="w-3/4 h-full bg-white dark:bg-slate-800 float-right p-4 grid grid-cols-1 grid-rows-[auto,1fr,auto]">
          <div className="border-b pl-2 pb-3 flex items-center justify-between dark:text-white">
            {user ? (
              <div className="flex items-center justify-start ">
                <ImUser className="rounded-full h-7 w-7 mr-3 border " />
                <h3 className="font-semibold ">Hi! {user.name}</h3>
              </div>
            ) : (
              <h3 className="font-semibold  ">Guest user</h3>
            )}

            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setShowMobileMenu(false)}
            >
              <RxCross2 className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex flex-col flex-grow md:hidden">
            {navLinks.map((navlink) => {
              if (navlink.isAuth && !user)
                return <div key={navlink.route}></div>;

              return (
                <Link
                  key={navlink.route}
                  className="px-4 py-2 mt-2 text-sm font-semibold font-nunito bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-primary-100 focus:bg-primary-100 focus:outline-none focus:shadow-outline"
                  href={navlink.route}
                >
                  {navlink.label}
                </Link>
              );
            })}
          </nav>

          {user ? (
            <>
              <button
                className="bg-primary-500 text-white w-full rounded py-1 flex items-center justify-center"
                onClick={logout}
              >
                Logout
                <MdLogout className="ml-2" />
              </button>
            </>
          ) : (
            <Link
              href={LOGIN_ROUTE}
              className="px-4 py-2 mt-2 text-sm font-semibold font-nunito bg-primary-500 text-center text-white rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600  md:mt-0 md:ml-4 hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:shadow-outline"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
