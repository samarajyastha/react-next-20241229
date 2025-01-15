"use client";

import { login } from "@/api/auth";
import {
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  REGISTER_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineMailOutline, MdPassword } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  async function submitForm(data) {
    setLoading(true);

    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.token);

      router.push(HOME_ROUTE);

      toast.success("Login successful.", {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }

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
        <div className="flex items-end border-b border-gray-500 dark:text-white">
          <MdPassword className="mb-2" />
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Your password"
            className="px-3 py-1 w-full mt-1 bg-transparent focus:outline-none"
            {...register("password", {
              required: "Password is required.",
            })}
          />
          {isPasswordVisible ? (
            <RiEyeFill className="mb-2" onClick={togglePasswordVisibility} />
          ) : (
            <RiEyeOffFill className="mb-2" onClick={togglePasswordVisibility} />
          )}
        </div>
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
      <input
        type="submit"
        value={loading ? "Submitting..." : "Login"}
        disabled={loading}
        className="mt-3 bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed hover:bg-primary-700"
      />

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
