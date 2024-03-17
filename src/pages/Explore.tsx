import { Input } from "@/components/ui/input";
const Explore = () => {
  return (
    <div className="flex flex-col w-full md:pt-10 md:px-10 px-6 pt-6">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-blue-600 capitalize mb-10">
          Search hashtags
        </h3>
        <div className="flex h-10 items-center border-2 group rounded-3xl min-w-[300px] md:w-3/5 py-2 gap-4 px-2">
          <img
            src="/assets/icons/search.svg"
            alt="search"
            className="h-full w-[20px]"
          />
          <Input type="search" name="search" placeholder="search hashtag..." />
        </div>
      </div>
    </div>
  );
};

export default Explore;
