import { Blogs } from "../components/pages/Blogs";
import { ClientsList } from "../components/pages/Clients";
import { CustomerReviews } from "../components/pages/CustomerReviews";
import { Faqs } from "../components/pages/Faqs";
import { Featured } from "../components/pages/Featured";
import { Footer } from "../components/pages/Footer";
import { Hero } from "../components/pages/Hero";
import { OurTeam } from "../components/pages/OurTeam";
import { Pricings } from "../components/pages/Pricings";
import { WhyUs } from "../components/pages/WhyUs";

export const Dashboard = () => {
  return (
    <div className="flex-col">
      <Hero />
      <ClientsList />

      <Featured />

      {/* <WhyUs />

      <Pricings />

      <CustomerReviews />

      <OurTeam />

      <Blogs />

      <Faqs />

      <Footer /> */}
    </div>
  );
};
