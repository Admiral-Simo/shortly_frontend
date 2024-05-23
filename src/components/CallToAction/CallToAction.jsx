const CallToAction = () => {
  return (
    <section id="calltoaction">
      <div className="calltoaction flex justify-center items-center flex-col space-y-4 p-16 bg-darkViolet">
        <h1 className="text-4xl font-bold text-white text-center">
          Boost Your Links Today
        </h1>
        <a href="/signup" className="btn">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
