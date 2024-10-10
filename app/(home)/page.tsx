import CategorySection from "./components/category";
import HeroSection from "./components/hero";
import PricingPlans from "./components/pricingPlan";
import ReadySection from "./components/readySection";
import TestimonialSection from "./components/testimonial";
import WidgetAnalyse from "./components/widgetAnalyse";
import WidgetDete from "./components/widgetDelete";
import WidgetSetup from "./components/widgetSetup";
import WidgetTask from "./components/widgetTask";

export default function Home() {
  return (
    <div className="main">
      <HeroSection />
      <CategorySection />
      <WidgetDete />
      <WidgetTask />
      <WidgetSetup />
      <WidgetAnalyse />
      <PricingPlans />
      <TestimonialSection />
      <ReadySection />
    </div>
  );
}
