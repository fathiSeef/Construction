import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Investment from "./pages/Investment";
import Brochure from "./pages/Brochure";
import About from "./pages/About";
import Residences from "./pages/Residences";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BookingConfirmation from "./pages/BookingConfirmation";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import PrivacyTerms from "./pages/PrivacyTerms";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/about" element={<About />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/investment-calculator" element={<InvestmentCalculator />} />
          <Route path="/privacy-terms" element={<PrivacyTerms />} />
          <Route path="/services" element={<Services />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;