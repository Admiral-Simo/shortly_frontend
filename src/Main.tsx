import Benefits from "./components/Benefits/Benefits";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Shortener from "./components/Shortener";
import useIsAuthenticated from "./useIsAuthenticated";

function Main() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isAuthenticated} />

      {!isAuthenticated && <Hero />}

      <main className="py-5 flex-grow">
        {isAuthenticated ? <Shortener /> : <Benefits />}
      </main>

      {!isAuthenticated && <CallToAction />}

      <Footer />
    </div>
  );
}

export default Main;
