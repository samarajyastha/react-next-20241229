import Footer from "@/components/Footer";
import PopularBrand from "@/components/home/Brand";
import HomeCategories from "@/components/home/Categories";
import HomeFeaturedProduct from "@/components/home/Featured";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto min-h-svh py-5">
        <Hero />
        <HomeCategories />
      </div>
      <HomeFeaturedProduct />
      <PopularBrand />
      <Footer />
    </div>
  );
}
