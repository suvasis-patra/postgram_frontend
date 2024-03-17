import { useGetUserPosts } from "@/lib/react-query/Queries";
import { Post } from "@/lib/types";
import { PostStats } from ".";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useNavigate } from "react-router-dom";
interface UserRelatedPostsProps {
  userId: string;
}

const UserRelatedPosts = ({ userId }: UserRelatedPostsProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetUserPosts(userId);
  console.log(data?.data);
  return (
    <section>
      <div className="flex gap-2 pb-6 items-center">
        <img src="/assets/icons/posts.svg" alt="post" />
        <h3 className="text-2xl font-semibold text-blue-900">Posts</h3>
      </div>
      {data?.data?.userPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.data?.userPosts?.map((post: Post) =>
            isLoading ? (
              <Skeleton className="h-[200px] w-[300px]" />
            ) : (
              <div
                key={post._id}
                className="flex justify-center items-center relative rounded-xl group"
              >
                <img
                  src={post.imageUrl}
                  alt="post"
                  className="object-cover rounded-xl w-full h-full"
                />
                <div className="absolute bottom-2 w-full p-2 opacity-0 group-hover:opacity-100">
                  <PostStats postId={post._id} />
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-4">
          <img
            src="/assets/img/file.png"
            alt="empty"
            className="object-cover max-w-[400px]"
          />
          <p className="text-xl text-blue-800 font-semibold">
            You have not created any post yet.
          </p>
          <Button
            className="bg-blue-700 text-white"
            onClick={() => navigate("/")}
          >
            Back to home
          </Button>
        </div>
      )}
    </section>
  );
};

export default UserRelatedPosts;
