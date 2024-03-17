import { RecentPosts, TopCreator } from "@/components/custom";

const Landing = () => {
  return (
    <section className="flex gap-8 px-8 pt-6">
      <div className="flex flex-col ">
        <h1 className="text-3xl font-bold text-blue-800">Home Feed</h1>
        <RecentPosts />
      </div>
      <TopCreator />
    </section>
  );
};

export default Landing;
