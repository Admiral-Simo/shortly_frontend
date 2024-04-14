import React, { useState } from "react";

const LinkItem = ({ link, shortened }) => {
  // TODO: call toast function
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shortened);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      alert("failed to copy link:", error);
    }
  };
  return (
    <div className="p-7 flex bg-white flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:justify-between">
      <h1 className="text-black font-bold md:mb-0">{link}</h1>
      <div className="flex flex-col md:flex-row items-center">
        <p className="font-bold text-cyan">{shortened}</p>
        <button
          className={`btn py-2 rounded-lg ml-3 ${!copied && "bg-darkViolet"} transition-colors duration-500`}
          onClick={copyLink}
          disabled={copied}
        >
          copy
        </button>
      </div>
    </div>
  );
};

export default LinkItem;
