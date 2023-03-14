import React from 'react'
import { About, Footer, Header, Skills, Testimonials, Work } from "./containers";
import { NavBar } from "./components/";
import './App.scss';
const App = () => {
  return (
    <div className='app'>

          <Header />
          <NavBar />
          <Work />
          <Skills />
          <Testimonials />
          <About />
          <Footer />
        </div>
  )
};

export default App;