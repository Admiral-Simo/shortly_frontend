import React from "react";

const LinkItem = ({ link, shortened, second }) => {
  return (
    <div className="p-7 flex bg-white flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:justify-between">
      <h1 className="text-black font-bold md:mb-0">{link}</h1>
      <div className="flex flex-col md:flex-row items-center">
        <p className="font-bold text-cyan">{shortened}</p>
        {second ? (
          <button className="btn py-2 rounded-lg ml-3 bg-darkViolet">
            copy
          </button>
        ) : (
          <button className="btn py-2 rounded-lg ml-3">copy</button>
        )}
      </div>
    </div>
  );
};

export default LinkItem;
