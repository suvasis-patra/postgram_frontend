import { useGetTopCreator } from "@/lib/react-query/Queries";
import { UserProfileCard } from ".";
import { TopCreatorInfo } from "@/lib/types";

const TopCreator = () => {
  const { data, isLoading } = useGetTopCreator();
  console.log(data);
  const topCreator: TopCreatorInfo[] = data?.data;
  return (
    <div className="hidden md:flex gap-2 flex-col">
      <h3 className="font-bold text-2xl text-blue-800">Top Creators</h3>
      <div className="grid grid-cols-2 gap-4 justify-center px-4">
        {topCreator?.map((creatorInfo) => {
          const { name, username, imageUrl, _id } = creatorInfo.user;
          return (
            <UserProfileCard
              key={creatorInfo._id}
              name={name}
              username={username}
              imageUrl={imageUrl}
              id={_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopCreator;
