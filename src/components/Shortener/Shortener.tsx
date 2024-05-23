import { FormEvent, useState } from "react";
import LinkItem from "../LinkItem";
import useAddUrl from "./useAddUrl";
import useGetUrls from "./useGetUrls";

const ensureValidURL = (url: string): [boolean, string] => {
  try {
    // Try to create a URL object
    let validatedURL = new URL(url);
    return [true, validatedURL.href];
  } catch {
    // If it fails, try adding 'https://' and then create a URL object
    try {
      let validatedURL = new URL("https://" + url);
      return [true, validatedURL.href];
    } catch {
      return [false, url];
    }
  }
};

const Shortener = () => {
  const urls = useGetUrls();
  const addUrl = useAddUrl();
  const [urlString, setUrlString] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // validate the url string
    // addUrl
    const [valid, finalUrl] = ensureValidURL(urlString);
    if (valid) {
      await addUrl(finalUrl);
    } else {
      alert("url is invalid");
    }
    setUrlString("");
  };

  return (
    <section id="main" className="bg-white">
      <form
        onSubmit={handleSubmit}
        className="container p-3 mx-auto mt-16 mb-9"
      >
        <div className="flex max-w-4xl mx-auto flex-col p-10 space-y-3 md:space-y-0 md:space-x-3 bg-darkViolet md:flex-row rounded-lg">
          <input
            className="rounded-lg p-4 placeholder-yellow-500 focus:outline-none md:flex-1"
            type="text"
            placeholder="Shorten a link here"
            value={urlString}
            onChange={(e) => setUrlString(e.target.value)}
          />
          <button className="btn rounded-lg text-white p-4" type="submit">
            Shorten it!
          </button>
        </div>
      </form>
      {/* Link Items */}
      <div className="max-w-4xl mx-auto space-y-3 mb-12">
        {urls?.map(({ url, id }) => (
          <LinkItem key={id} shortened={window.location.href + id} link={url} />
        ))}
      </div>
    </section>
  );
};

export default Shortener;
