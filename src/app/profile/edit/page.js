"use client";

import { getUserById, updateUser } from "@/api/user";
import ProfileImage from "@/components/profile/Image";
import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import { updateAuthUser } from "@/redux/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function EditProfilePage() {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: user?.address.city,
      country: user?.address.country,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      province: user?.address.province,
      street: user?.address.street,
    },
  });

  async function submitForm(data) {
    setLoading(true);

    try {
      await updateUser(user.id, {
        address: {
          street: data.street,
          city: data.city,
          province: data.province,
          country: data.country,
        },
        phone: data.phone,
        name: data.name,
      });

      const userData = await getUserById(user.id);

      dispatch(updateAuthUser(userData));

      toast.success("User update successful.", {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error?.response?.data, {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!user) router.replace(LOGIN_ROUTE);
  }, [router, user]);

  return (
    <div className="py-8 sm:p-10 p-5">
      <ProfileImage />
      <div className="py-5 px-8 rounded-2xl border my-8 dark:text-white">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="py-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
              {...register("name", {
                required: "Name is required.",
              })}
            />
            <p className="text-red-600 text-sm m-1">{errors.name?.message}</p>
          </div>
          <div className="py-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              disabled={true}
              className="disabled:bg-slate-100 disabled:opacity-80 border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
              {...register("email", {
                required: "Email is required.",
              })}
            />
            <p className="text-red-600 text-sm m-1">{errors.name?.message}</p>
          </div>
          <div className="py-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="street"
              placeholder="Street"
              className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
              {...register("street", {
                required: "Street is required.",
              })}
            />
            <p className="text-red-600 text-sm m-1">{errors.street?.message}</p>
            <div className="grid md:grid-cols-3 gap-2">
              <div>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
                  {...register("city", {
                    required: "City is required.",
                  })}
                />
                <p className="text-red-600 text-sm m-1">
                  {errors.city?.message}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  id="province"
                  placeholder="Province"
                  className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
                  {...register("province", {
                    required: "Province is required.",
                  })}
                />
                <p className="text-red-600 text-sm m-1">
                  {errors.province?.message}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
                  {...register("country", {
                    required: "Country is required.",
                  })}
                />
                <p className="text-red-600 text-sm m-1">
                  {errors.country?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              id="phone"
              className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
              {...register("phone", {
                required: "Phone number is required.",
              })}
            />
            <p className="text-red-600 text-sm m-1">{errors.phone?.message}</p>
          </div>
          <div className="pt-5">
            <button
              disabled={loading}
              type="submit"
              className="bg-primary-600 text-white px-10 h-10 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed flex items-center disabled:bg-opacity-80"
            >
              {loading ? (
                <>
                  <span>Updating</span>
                  <Spinner className="h-6 w-6 ml-2" />
                </>
              ) : (
                "Update"
              )}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default EditProfilePage;
