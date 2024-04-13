import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col items-center justify-between p-3 mx-auto lg:flex-row">
      <div className="flex flex-col flex-1 order-2 lg:py-20 lg:order-1">
          <h1 className="mt-20 mb-10 text-5xl font-bold text-center lg:mt-0 lg:text-6xl lg:text-left lg:max-w-md">More than just shorter links</h1>
          <h3 className="max-w-md mb-5 text-xl text-center text-gray-400 lg:text-2xl lg:text-left">Build your brand's recognition and get detailed insights on how your links are performing.</h3>
          <button className="m-auto text-2xl text-center w-fit lg:m-0 lg:text-3xl btn lg:text-left">Get Started</button>
        </div>
        <div className="flex-1 order-1 w-full px-6 lg:self-start lg:order-2">
        <img src={require('../../images/illustration-working.png')} alt="" />
            
        </div>
      </div>
    </section>
  );
};

export default Hero;
