import { UserInfo, UserRelatedPosts } from "@/components/custom";
import { useGetUserById } from "@/lib/react-query/Queries";
import { useParams } from "react-router-dom";
const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data, isLoading } = useGetUserById(userId!);
  const userInformation = data?.data;
  return (
    <div className="flex flex-col md:px-10 px-6 items-start gap-8 pt-8">
      <UserInfo
        imageUrl={userInformation?.imageUrl}
        username={userInformation?.username}
        name={userInformation?.name}
        id={userInformation?._id}
      />
      <UserRelatedPosts userId={userInformation?._id} />
    </div>
  );
};

export default UserProfile;
