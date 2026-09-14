import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappBtn from "./components/WhatsappBtn";

function Layout() {
  const location = useLocation();

  const isBrochurePage = location.pathname === "/brochure";
  const isBookingConfirmationPage =
    location.pathname === "/booking-confirmation";
  const isInvestmentCalculatorPage =
    location.pathname === "/investment-calculator";
  const isPrivacyTermsPage =
    location.pathname === "/privacy-terms";

  const hideDefaultNavbar =
    isBrochurePage ||
    isBookingConfirmationPage ||
    isInvestmentCalculatorPage ||
    isPrivacyTermsPage;

  return (
    <>
      {!hideDefaultNavbar && <Navbar />}

      <main>
        <Outlet />
      </main>

      <Footer />
      <WhatsappBtn />
    </>
  );
}

export default Layout;