import RegisterForm from "@/components/auth/RegisterForm";

function RegisterPage() {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3">
      <h3 className="text-3xl mb-5 font-bold text-textColor dark:text-white">
        Register
      </h3>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
