import "@/styles/globals.css";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Footer from "@/Components/Footer";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Home from "@/Components/Home";
import Contact from "@/Components/Contact";
import Testimonial from "@/Components/Testimonial";

export default function App({ Component, pageProps }) {
  return (
    <>

      <Navbar />       {/* Will appear on every page */}
      <Home/>
      <Projects/>
      <Skills/>
      <Services/>
      <Testimonial/>
      <Contact/>
      
      <Footer />       {/* Will appear on every page */}
    </>
  );
}