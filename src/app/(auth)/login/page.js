import Image from "next/image";
import ecommerce from "@/assets/images/ecommerce.png";
import LoginForm from "@/components/auth/LoginForm";

function LoginPage() {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-between p-10 md:p-20 m-5 lg:m-10">
      <div className="w-1/2 mr-10 p-5 hidden md:block">
        <Image
          src={ecommerce}
          alt="Auth image"
          height={300}
          width={500}
          className="w-full"
        />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/3">
        <h3 className="text-3xl mb-5 font-bold text-textColor dark:text-white">Login</h3>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
