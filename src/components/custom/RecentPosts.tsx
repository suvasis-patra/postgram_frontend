import { useRecentPosts } from "@/lib/react-query/Queries";
import { PostCard } from ".";
import { Post } from "@/lib/types";

const RecentPosts = () => {
  const { data, isLoading } = useRecentPosts();
  console.log(data);
  const posts: Post[] = data?.data;
  return (
    <div className="flex w-full">
      <div
        className="flex flex-col gap-4 w-full
    pt-6"
      >
        {posts?.map((post) => (
          <PostCard postData={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
