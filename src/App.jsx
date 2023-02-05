import React from "react";
import CallToAction from "./components/CallToAction/CallToAction";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Feature />
      <CallToAction />
      <Footer />
    </div>
  );
}



export default App;
