import Navbar from "@/components/Navbar";
import "./globals.css";

// Static metadata
export const metadata = {
  title: "ElectroShop",
  description: "Online buy/sell electronic items.",
  keywords: "Online buy electronics products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white dark:bg-zinc-900 py-3 w-full">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="font-extrabold text-2xl">LOGO</h1>
            <Navbar />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

// Layout: It is a UI that is shared between multiple pages
