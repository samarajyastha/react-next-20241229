"use client";

import Link from "next/link";
import PasswordField from "./PasswordField";
import Spinner from "../Spinner";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { MdOutlineMailOutline } from "react-icons/md";
import { loginUser } from "@/redux/auth/authActions";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    toast.error(error, { autoClose: 1500 });
  }, [error]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="py-2">
        <div className="flex items-end border-b border-gray-500 dark:text-white">
          <MdOutlineMailOutline className="mb-2" />
          <input
            type="email"
            id="email"
            className="px-3 py-1 w-full mt-1 bg-transparent focus:outline-none"
            placeholder="Your email address"
            {...register("email", {
              required: "Email address is required.",
            })}
          />
        </div>
        <p className="text-red-600 text-sm m-1">{errors.email?.message}</p>
      </div>
      <div className="py-2 ">
        <PasswordField
          id="password"
          placeholder="Your password"
          {...register("password", {
            required: "Password is required.",
          })}
        />
        <p className="text-red-600 text-sm m-1">{errors.password?.message}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-3">
        <div>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="text-sm ml-2 dark:text-white ">
            Remember me
          </label>
        </div>

        <Link
          href={FORGOT_PASSWORD_ROUTE}
          className="text-sm underline text-primary-400 hover:text-primary-600 dark:text-white hover:dark:text-gray-200"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center mt-3 bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed hover:bg-primary-700"
      >
        {loading ? <Spinner className="w-6 h-6  mr-2" /> : null}
        Login
      </button>

      <Link
        href={REGISTER_ROUTE}
        className="text-primary-400 block mt-6 hover:underline dark:text-white"
      >
        Create account?
      </Link>

      <ToastContainer />
    </form>
  );
}

export default LoginForm;
