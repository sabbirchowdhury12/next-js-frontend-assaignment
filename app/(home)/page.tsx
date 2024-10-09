import CategorySection from "./components/category";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <div className="main">
      <HeroSection />
      <CategorySection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
}
