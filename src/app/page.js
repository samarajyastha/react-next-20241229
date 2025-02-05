import Footer from "@/components/Footer";
import PopularBrand from "@/components/home/PopularBrand";
import HomeCategories from "@/components/home/Categories";
import HomeFeaturedProduct from "@/components/home/FeaturedProduct";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <Hero />
      <Features />
      <HomeCategories />
      <HomeFeaturedProduct />
      <PopularBrand />
      <Footer />
    </div>
  );
}
