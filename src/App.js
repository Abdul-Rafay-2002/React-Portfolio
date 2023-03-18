import React from 'react'
import { About, Contact, Footer, Header, Skills, Testimonials, Work } from "./containers";
import { NavBar } from "./components/";
import './App.scss';
const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  )
};

export default App;