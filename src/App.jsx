import React from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import {Projects} from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
  // all lowercase

const App = () =>{
  return (
    <div>
          <Navbar/>
          <Hero/>
          <Projects/>
          <Bio/>
          <Services/>
          <Skills/>
          <ContactForm/>
          <Footer/>
        </div>
   

  )
}

export default App