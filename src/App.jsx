// src/App.jsx
import backgroundImage from "./assets/images/background-section.webp";
import Header from "./components/layouts/Header/Header";
import ChooseUs from "./components/sections/ChooseUs";
import HeroSections from "./components/sections/HeroSections";
import ProductsGallery from "./components/sections/ProductsGallery";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layouts/Footer/Footer";

export default function App() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

        {/* Conteúdo sobre o fundo */}
        <div className="relative z-10">
          <Header />
          <HeroSections />
        </div>
      </div>
        <ProductsGallery />
        <ChooseUs />
        <ContactSection />
        <Footer />
    </div>
  );
}
