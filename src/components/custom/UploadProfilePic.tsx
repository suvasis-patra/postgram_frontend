import { Button } from "@/components/ui/button";
import { userAtom } from "@/store/atoms/userAtom";
import { useCallback, useState } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { useRecoilValue } from "recoil";

interface UploadProfilePicProps {
  fieldChange: (file: FileWithPath) => void;
}

const UploadProfilePic = ({ fieldChange }: UploadProfilePicProps) => {
  const user = useRecoilValue(userAtom);
  const [profilePic, setProfilePic] = useState<FileWithPath | null>(null);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setProfilePic(acceptedFiles[0]);
      fieldChange(acceptedFiles[0]);
    },
    [profilePic, fieldChange, setProfilePic]
  );
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
  });
  console.log(user.imageUrl);
  return (
    <div className="flex justify-center items-center">
      <div className="cursor-pointer" {...getRootProps()}>
        <input type="text" name="profilePic" {...getInputProps()} />
        {profilePic ? (
          <div className="flex justify-center items-center flex-1 h-[250px] w-[250]">
            <img
              src={URL.createObjectURL(profilePic)}
              alt="profile-pic"
              height={250}
              width={250}
              className="object-cover rounded-full aspect-square h-full w-full"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4 flex-col">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile-placehoder"
              height={250}
              width={250}
              className="rounded-full object-cover "
            />
            <Button className="hover:bg-blue-200" variant="outline">
              {" "}
              <span className="px-2">
                <img
                  src="/assets/icons/edit.svg"
                  alt=""
                  className="text-white"
                  height={20}
                  width={20}
                />
              </span>{" "}
              Add New
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadProfilePic;
