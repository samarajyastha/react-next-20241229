import Image from "next/image";
import userImage from "@/assets/images/user.jpg";
import { getUserById, uploadProfileImage } from "@/api/user";
import { toast } from "react-toastify";
import { updateAuthUser } from "@/redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Spinner from "../Spinner";

function ProfileImage() {
  const [localImageUrl, setLocalImageUrl] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  async function updateProfile(e) {
    e.preventDefault();

    setUploading(true);

    const formData = new FormData();
    formData.append("image", profileImage);

    try {
      await uploadProfileImage(user.id, formData);

      const userData = await getUserById(user.id);

      dispatch(updateAuthUser(userData));

      toast.success("Profile image upload success.", {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error?.response?.data, {
        autoClose: 1500,
      });
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <Image
        src={localImageUrl || user?.profileImageUrl || userImage}
        alt="image"
        height={150}
        width={150}
        className="p-1 rounded-full border-slate-300 border-4 h-36 w-36 fit-"
      />

      <form onSubmit={updateProfile} className="flex items-center mt-3">
        <input
          type="file"
          className="border border-gray-500 h-10 rounded px-3 py-1 w-full shadow-md dark:text-white dark:bg-zinc-600"
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
        <button
          disabled={uploading || localImageUrl == null}
          type="submit"
          className="bg-primary-600 text-white px-10 h-10 ml-3 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed flex items-center disabled:bg-opacity-80"
        >
          {uploading ? (
            <>
              <span>Uploading</span>
              <Spinner className="h-6 w-6 ml-2" />
            </>
          ) : (
            "Upload"
          )}
        </button>
      </form>
    </div>
  );
}

export default ProfileImage;
