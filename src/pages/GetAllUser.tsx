import { UserProfileCard } from "@/components/custom";
import { useGetAllUsers } from "@/lib/react-query/Queries";
import { CreatorInfo } from "@/lib/types";

const GetAllUser = () => {
  const { data, isLoading } = useGetAllUsers();
  console.log(data?.data);
  return (
    <div className="pt-10 px-6 md:px-10 flex flex-col gap-6 md:gap-10">
      <div className=" flex gap-4 items-center border-b border-0 ">
        <img
          src="/assets/icons/profile-placeholder.svg"
          alt="profile"
          height={20}
          width={20}
        />
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">All users</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((user: CreatorInfo) => {
          const { username, _id, name, imageUrl } = user;
          return (
            <UserProfileCard
              key={_id}
              username={username}
              name={name}
              imageUrl={imageUrl}
              id={_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GetAllUser;
