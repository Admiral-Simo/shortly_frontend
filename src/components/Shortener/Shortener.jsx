import LinkItem from "../LinkItem/LinkItem";
import useGetUrls from "./useGetUrls";

const Shortener = () => {
  const urls = useGetUrls();
  return (
    <section id="main" className="bg-white">
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
      <div className="max-w-4xl mx-auto space-y-3 mb-3">
        {urls.map(({ url, id }) => (
          <LinkItem key={id} shortened={window.location.href + id} link={url} />
        ))}
      </div>
    </section>
  );
};

export default Shortener;
