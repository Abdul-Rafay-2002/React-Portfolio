import React from 'react'
import { About, Footer, Header, Skills, Testimonials, Work } from "./containers";
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
      <Footer />
    </>
  )
};

export default App;