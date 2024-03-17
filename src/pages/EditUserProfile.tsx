import { ProfileForm, UploadProfilePic } from "@/components/custom";
import { userAtom } from "@/store/atoms/userAtom";
import { useRecoilValue } from "recoil";

const EditUserProfile = () => {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <section className="w-full justify-center items-center flex-col pt-10 px-8">
      <div className="flex gap-3 items-center">
        <img src="/assets/icons/edit.svg" alt="edit" height={30} width={30} />
        <h3 className="text-2xl font-bold text-blue-700">Edit Profile</h3>
      </div>
      <UploadProfilePic />
      <ProfileForm />
    </section>
  );
};

export default EditUserProfile;
