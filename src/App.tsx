import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";
import Auth from "./Auth";
import PromptPage from "./components/prompt";

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Gallery />
              <FAQ />
              <Pricing />
              <CTA />
              <Footer />
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/prompt" element={<PromptPage />} />
      </Routes>
    </div>
  );
}

export default App;
