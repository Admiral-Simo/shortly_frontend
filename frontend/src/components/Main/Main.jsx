import React from "react";
import LinkItem from "../LinkItem/LinkItem";

const Main = () => {
  return (
    <section id="main" className="bg-gray-100">
      <div className="container p-3 mx-auto mt-16 mb-9">
        <div className="flex max-w-4xl mx-auto flex-col p-10 space-y-3 md:space-y-0 md:space-x-3 bg-darkViolet md:flex-row rounded-lg">
          <input
            className="rounded-lg p-4 placeholder-yellow-500 focus:outline-none md:flex-1"
            type="text"
            placeholder="Shorten a link here"
          />
          <button className="btn rounded-lg text-white p-4">Shorten it!</button>
        </div>
      </div>
      {/* Link Items */}
      <div className="max-w-4xl mx-auto space-y-3">
        <LinkItem shortened={"this is the shortened link"} link={"something"} />
      </div>
    </section>
  );
};

export default Main;
