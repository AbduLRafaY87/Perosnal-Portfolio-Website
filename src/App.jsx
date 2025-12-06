import HomePage from "./pages/HomePage/HomePageSEO";
import ServicesPage from "./pages/ServicesPage/ServicesPageSEO";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPageSEO";
import AboutPage from "./pages/AboutPage/AboutPageSEO";
import BlogPage from "./pages/BlogPage/BlogPageSEO";
import BlogReader from "./pages/BlogPage/BlogReaderSEO";
import ContactPage from "./pages/ContactPage/ContactPageSEO";
import "./styling/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./components/layout/NotFound";
import NavTop from "./components/ui/NavTop"
import NavigationLoader from "./components/common/NavigationLoader"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationLoader />
      <NavTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-services" element={<ServicesPage />} />
        <Route path="/my-portfolio" element={<PortfolioPage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/my-blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogReader />} />
        <Route path="/get-in-touch" element={<ContactPage />} />

        {/* 404 fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
