"use client";

import { getUserById, updateUser, uploadProfileImage } from "@/api/user";
import { updateAuthUser } from "@/redux/auth/authSlice";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function EditProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const [localImageUrl, setLocalImageUrl] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      street: user?.address.street,
      city: user?.address.city,
      province: user?.address.province,
      country: user?.address.country,
      phone: user?.phone,
    },
  });

  async function submitForm(data) {
    try {
      await updateUser(user.id, {
        address: {
          street: data.street,
          city: data.city,
          province: data.province,
          country: data.country,
        },
        phone: data.phone,
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
    }
  }

  async function updateProfile(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", profileImage);

    try {
      await uploadProfileImage(user.id, formData);

      toast.success("Success", {
        autoClose: 1500,
        onClose: () => router.replace(PRODUCTS_ROUTE),
      });
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
      });
    }
  }

  return (
    <div className="py-8 sm:p-10 p-5">
      <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-textColor dark:text-white">
        Edit profile
      </h2>
      <div className="py-5 px-8 rounded-2xl border my-8 dark:text-white">
        <form onSubmit={handleSubmit(submitForm)}>
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
            <input
              type="submit"
              value={"Update"}
              className="bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed"
            />
          </div>
        </form>
      </div>

      <div className="py-5 px-8 rounded-2xl border my-8 dark:text-white">
        <form onSubmit={updateProfile}>
          <div className="py-2">
            <label htmlFor="profile-image">Update profile image</label>
            {localImageUrl && (
              <div className="p-5 bg-gray-100 dark:bg-zinc-600 my-1 rounded flex items-center justify-evenly">
                <Image
                  src={localImageUrl}
                  alt="image"
                  height={200}
                  width={200}
                />
              </div>
            )}

            <input
              type="file"
              className="border border-gray-500 rounded px-3 py-1 w-full shadow-md mt-1 dark:text-white dark:bg-zinc-600"
              id="profile-image"
              onChange={(e) => {
                const files = [];
                const urls = [];

                Array.from(e.target?.files).map((file) => {
                  files.push(file);
                  urls.push(URL.createObjectURL(file));
                });

                setProfileImage(files[0]);
                setLocalImageUrl(urls[0]);
              }}
            />
          </div>
          <div className="pt-5">
            <input
              type="submit"
              value={"Upload "}
              className="bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed"
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditProfilePage;
