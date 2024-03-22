import InfintePosts from "@/components/custom/InfintePosts";

const Explore = () => {
  return (
    <div className="flex flex-col w-full md:pt-10 md:px-10 px-6 pt-6">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-blue-600 capitalize mb-10">
          Search hashtags
        </h3>
        <div className="flex h-12 items-center border-2 group rounded-3xl min-w-[300px] md:w-3/5 py-2 gap-4 px-2">
          <img
            src="/assets/icons/search.svg"
            alt="search"
            className="h-full w-[20px]"
          />
          <input
            type="search"
            name="search"
            placeholder="search hashtag..."
            className="w-full h-8 outline-none focus:outline-none text-lg"
          />
        </div>
      </div>
      <div className="border-b-[1px] border-neutral-300 mt-10 shadow-sm flex justify-between pb-2 cursor-pointer">
        <h3 className="text-2xl font-semibold text-blue-800 pb-2">
          Popular Today
        </h3>
        <div className="flex gap-2 items-center p-2 hover:shadow-sm rounded-3xl">
          All
          <span>
            <img src="/assets/icons/filter.svg" alt="filter" />
          </span>
        </div>
      </div>
      <InfintePosts />
    </div>
  );
};

export default Explore;
