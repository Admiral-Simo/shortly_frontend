import { useState } from "react";

interface PLinkItem {
  link: string;
  shortened: string;
}

function dotdotdotALink(link: string, max: number): string {
  if (link.length < max) {
    return link;
  } else {
    return `${link.slice(0, max)}...`;
  }
}

const LinkItem = ({ link, shortened }: PLinkItem) => {
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
      alert("failed to copy link:" + error);
    }
  };
  return (
    <div className="p-7 shadow-2xl flex bg-white flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:justify-between">
      <h1 className="text-black font-bold md:mb-0">
        {dotdotdotALink(link, 25)}
      </h1>
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
