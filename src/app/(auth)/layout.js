export default function AuthLayout({ children }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-8 min-h-svh">{children}</div>
    </div>
  );
}
