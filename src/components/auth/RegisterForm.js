"use client";

import PasswordField from "./PasswordField";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { MdOutlineMailOutline } from "react-icons/md";
import { PASSWORD_REGEX } from "@/constants/regex";
import { signup } from "@/api/auth";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Spinner from "../Spinner";
import { RiUser3Fill } from "react-icons/ri";

function RegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const password = watch("password");

  const router = useRouter();

  async function submitForm(data) {
    setLoading(true);

    try {
      const response = await signup(data);

      localStorage.setItem("authToken", response.token);

      toast.success("Register successful.", {
        autoClose: 1500,
        onClose: () => router.push(HOME_ROUTE),
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
          <RiUser3Fill className="mb-2" />
          <input
            type="text"
            id="name"
            className="px-3 py-1 w-full mt-1 bg-transparent focus:outline-none"
            placeholder="Your full name"
            {...register("name", {
              required: "Full name is required.",
            })}
          />
        </div>
        <p className="text-red-600 text-sm m-1">{errors.name?.message}</p>
      </div>
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
            pattern: {
              value: PASSWORD_REGEX,
              message:
                "Password must contain uppercase, lowercase, numbers and special characters.",
            },
            minLength: {
              value: 6,
              message: "Password length must be greater than 6.",
            },
          })}
        />
        <p className="text-red-600 text-sm m-1">{errors.password?.message}</p>
      </div>
      <div className="py-2 ">
        <PasswordField
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Confirm password is required.",
            validate: (value) => {
              return value == password || "Passwords do not match.";
            },
          })}
        />
        <p className="text-red-600 text-sm m-1">
          {errors.confirmPassword?.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center mt-3 bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed hover:bg-primary-700"
      >
        {loading ? <Spinner className="w-6 h-6  mr-2" /> : null}
        Register
      </button>

      <Link
        href={LOGIN_ROUTE}
        className="text-primary-400 block mt-6 hover:underline dark:text-white"
      >
        Already have an account?
      </Link>

      <ToastContainer />
    </form>
  );
}

export default RegisterForm;
