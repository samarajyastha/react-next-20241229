import "./globals.css";

export const metadata = {
  title: "ElectroShop",
  description: "Online buy/sell electronic items.",
  keywords: "Online buy electronics products"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
