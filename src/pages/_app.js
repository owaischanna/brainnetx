import "@/styles/globals.css";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Footer from "@/Components/Footer";
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