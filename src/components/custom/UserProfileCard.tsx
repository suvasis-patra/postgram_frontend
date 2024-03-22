import { Link } from "react-router-dom";
interface UserProfileCardProps {
  name: string;
  username: string;
  imageUrl: string | undefined;
  id: string;
}
const UserProfileCard = ({
  id,
  name,
  username,
  imageUrl,
}: UserProfileCardProps) => {
  return (
    <Link
      to={`/user/${id}`}
      className="felx flex-col justify-center items-center  py-4 px-8 text-center rounded-md shadow-md hover:bg-blue-100"
    >
      <div className="flex justify-center items-center mb-6">
        <img
          src={`${imageUrl || "/assets/icons/profile-placeholder.svg"}`}
          alt="profile"
          className="object-cover aspect-square rounded-full"
          height={50}
          width={50}
        />
      </div>
      <h3 className="text-xl font-semibold capitalize leading-none  text-blue-700 mb-1">
        {name}
      </h3>
      <p className="text-lg text-gray-400">@{username}</p>
    </Link>
  );
};

export default UserProfileCard;
