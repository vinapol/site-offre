import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Offers from "./components/Offers.jsx";
import Method from "./components/Method.jsx";
import Work from "./components/Work.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [plan, setPlan] = useState("");

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Offers onSelectPlan={setPlan} />
        <Method />
        <Work />
        <Pricing onSelectPlan={setPlan} />
        <Contact plan={plan} onPlanChange={setPlan} />
      </main>
      <Footer />
    </>
  );
}
