import { useState } from "react";
import { Button } from "../ui/button";
import {
  useTogglePostLike,
  useTogglePostSaved,
} from "@/lib/react-query/Queries";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/store/atoms/userAtom";
interface PostStatsProps {
  postId: string;
}
const PostStats = ({ postId }: PostStatsProps) => {
  const user = useRecoilValue(userAtom);
  const [isLiked, setIsLiked] = useState(user.liked?.includes(postId) || false);
  const [isSaved, setIsSaved] = useState(user.saved?.includes(postId) || false);
  const { mutateAsync: toggleSave } = useTogglePostSaved(postId);
  const { mutateAsync: toggleLike } = useTogglePostLike(postId);
  const likeClickHandler = async () => {
    await toggleLike();
    setIsLiked((like) => !like);
  };
  const saveClickHandler = async () => {
    await toggleSave();
    setIsSaved((save) => !save);
  };
  return (
    <div className="flex justify-between w-full">
      <Button
        onClick={likeClickHandler}
        className="rounded-full"
        variant="link"
      >
        <img
          src={`/assets/icons/${isLiked ? "liked.svg" : "like.svg"}`}
          alt=""
        />
      </Button>
      <Button
        onClick={saveClickHandler}
        className="rounded-full"
        variant="link"
      >
        <img
          src={`/assets/icons/${isSaved ? "saved.svg" : "save.svg"}`}
          alt=""
        />
      </Button>
    </div>
  );
};

export default PostStats;
