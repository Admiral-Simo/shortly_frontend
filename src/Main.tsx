import Benefits from "./components/Benefits/Benefits";
import CallToAction from "./components/CallToAction/CallToAction";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shortener from "./components/Shortener";
import { useEffect, useState } from "react";

// App That helps people shorten their Links

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isAuthenticated} />
      {isAuthenticated ? null : <Hero />}

      <div className="flex-grow bg-white">
        <Shortener />
        {isAuthenticated ? null : (
          <>
            <Feature />
            <Benefits />
          </>
        )}
      </div>
      {!isAuthenticated && <CallToAction />}
      <Footer />
    </div>
  );
}

export default Main;
