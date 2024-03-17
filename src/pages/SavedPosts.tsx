import { useGetSavedPosts } from "@/lib/react-query/Queries";
import { Post } from "@/lib/types";
import { PostStats } from "@/components/custom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const SavedPosts = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetSavedPosts();
  console.log(data?.data);
  return (
    <div className="md:px-10 px-6 md:pt-8 pt-4">
      <div className="flex gap-3 items-center mb-6">
        <img src="/assets/icons/save.svg" alt="save" height={20} width={20} />
        <h3 className="text-2xl font-semibold text-blue-900">Saved Posts</h3>
      </div>
      {data?.data?.savedPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.data?.savedPosts?.map((post: Post) => (
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
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-4">
          <img
            src="/assets/img/file.png"
            alt="empty"
            className="object-cover max-w-[400px]"
          />
          <p className="text-xl text-blue-800 font-semibold">
            You have not saved any post yet.
          </p>
          <Button
            className="bg-blue-700 text-white"
            onClick={() => navigate("/")}
          >
            Back to home
          </Button>
        </div>
      )}
    </div>
  );
};

export default SavedPosts;
