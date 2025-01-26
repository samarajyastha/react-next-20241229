"use client";

import { uploadProfileImage } from "@/api/user";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

function EditProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const [localImageUrl, setLocalImageUrl] = useState(null);

  const { user } = useSelector((state) => state.auth);

  async function submitForm(e) {
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
    <div className="p-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-center">
        Update profile image
      </h2>
      <form onSubmit={submitForm}>
        <div className="py-5">
          <label htmlFor="profile-image">Profile image</label>
          {localImageUrl && (
            <div className="p-5 bg-gray-100 dark:bg-zinc-600 my-1 rounded flex items-center justify-evenly">
              <Image src={localImageUrl} alt="image" height={200} width={200} />
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
        <div className="flex justify-center pt-5">
          <input
            type="submit"
            value={"Upload "}
            className="bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed"
          />
        </div>
      </form>
    </div>
  );
}

export default EditProfilePage;
