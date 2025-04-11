import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import Footer from "@/components/Footer";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Home from "@/Components/Home";
import Contact from "@/Components/Contact";


export default function App({ Component, pageProps }) {
  return (
    <>

      <Navbar />       {/* Will appear on every page */}
      <Home/>
      {/* <Hero/> */}
      <Projects/>
      <Skills/>
      <Services/>
      <Contact/>
      
      <Footer />       {/* Will appear on every page */}
    </>
  );
}