import { useRecoilValue } from "recoil";
import { Button } from "../ui/button";
import { userAtom } from "@/store/atoms/userAtom";
import { Link } from "react-router-dom";
interface UserInfoProps {
  imageUrl?: string | undefined;
  username: string;
  name: string;
  id: string;
}
const UserInfo = ({ imageUrl, username, name, id }: UserInfoProps) => {
  const user = useRecoilValue(userAtom);
  return (
    <div className="flex gap-4 items-center md:pl-10 pl-6">
      <div className="flex justify-center items-center">
        <img
          src={imageUrl ? imageUrl : "/assets/img/profile.png"}
          alt="profile"
          className="object-cover"
          height={120}
          width={120}
        />
      </div>
      <div className="flex gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 capitalize">
            {name}
          </h3>
          <p className="text-lg text-gray-400">@{username}</p>
        </div>
        {user._id === id ? (
          <Link to={`/edit-user-profile/${user._id}`}>
            <img
              src="/assets/icons/edit.svg"
              alt="edit"
              height={20}
              width={20}
            />
          </Link>
        ) : (
          <div className="flex gap-3 items-start">
            <Button className="bg-blue-500 text-white capitalize">
              follow
            </Button>
            <Button className="capitalize" variant="secondary">
              message
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
