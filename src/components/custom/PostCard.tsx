import { Post } from "@/lib/types";
import { PostStats } from ".";
interface PostCardProps {
  postData: Post;
  ref?: React.RefObject<HTMLDivElement> | React.ForwardedRef<HTMLDivElement>;
}
const PostCard: React.FC<PostCardProps> = ({ postData }) => {
  const { creatorInfo, _id } = postData;
  // console.log(postData, PostWithCreatorInfo?.[0]);
  return (
    <div className="flex justify-center items-start p-4 rounded-lg shadow-sm border-[1px] gap-4 flex-col">
      <div className="flex gap-2">
        <img src={"/assets/icons/profile-placeholder.svg"} alt="profile" />
        <div>
          <h3 className="text-xl font-semibold text-blue-500 capitalize">
            {creatorInfo?.[0].name}
          </h3>
          <p className="text-gray-500 text-lg">@{creatorInfo?.[0].username}</p>
        </div>
      </div>
      <div className="pl-2">
        <p className="text-lg">{postData.caption}</p>
        <p>
          {postData?.tags?.map((tag) => (
            <span key={tag} className="text-lg text-blue-700">
              # {tag}
            </span>
          ))}
        </p>
      </div>
      <div className="flex justify-center items-center rounded-lg w-full">
        <img
          src={postData.imageUrl}
          alt="post"
          className="max-w-[480px] object-cover aspect-square rounded-lg w-full"
        />
      </div>
      <PostStats postId={_id} />
    </div>
  );
};

export default PostCard;
