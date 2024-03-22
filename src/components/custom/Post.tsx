import { PostStats } from ".";
interface PostRelatedProps {
  imageUrl: string;
  id: string;
}
const Post = ({ imageUrl, id }: PostRelatedProps) => {
  return (
    <div className="flex justify-center items-center relative rounded-xl group">
      <img
        src={imageUrl}
        alt="post"
        className="object-cover rounded-xl w-full h-full"
        loading="lazy"
      />
      <div className="absolute bottom-2 w-full p-2 opacity-0 group-hover:opacity-100">
        <PostStats postId={id} />
      </div>
    </div>
  );
};

export default Post;
