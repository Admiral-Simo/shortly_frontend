import Benefits from "./components/Benefits/Benefits";
import CallToAction from "./components/CallToAction/CallToAction";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shortener from "./components/Shortener";

// App That helps people shorten their Links

function Main() {
  return (
    <div>
      <Header />
      <Hero />

      <div className="bg-gray-100">
        <Shortener />
        <Feature />
        <Benefits />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Main;
