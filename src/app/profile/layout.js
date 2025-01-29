export const metadata = {
  title: "Profile",
};

export default function ProfileLayout({ children }) {
  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto min-h-svh">{children}</div>
    </div>
  );
}
