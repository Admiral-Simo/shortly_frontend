import Benefits from "./components/Benefits/Benefits";
import CallToAction from "./components/CallToAction/CallToAction";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Shortener from "./components/Shortener";
import useIsAuthenticated from "./useIsAuthenticated";

// App That helps people shorten their Links

function Main() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isAuthenticated} />
      {isAuthenticated ? null : <Hero />}

      <div className="flex-grow bg-white">
        {isAuthenticated && <Shortener />}
        {!isAuthenticated && (
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
