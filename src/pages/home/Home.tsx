import {
  HeroSection,
  TrendyPlants,
  TopSelling,
  CustomerReviews,
} from "@/components";

function Home() {
  return (
    <div className="text-white">
      <HeroSection />
      <TrendyPlants />
      <TopSelling />
      <CustomerReviews />
    </div>
  );
}

export default Home;
