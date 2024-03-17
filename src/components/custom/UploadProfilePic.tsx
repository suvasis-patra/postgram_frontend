import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

const UploadProfilePic = () => {
  const [profilePic, setProfilePic] = useState<FileWithPath | null>(null);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setProfilePic(acceptedFiles[0]);
  }, []);
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
  });
  return (
    <div className="flex justify-center items-center">
      <div className="cursor-pointer" {...getRootProps()}>
        <input type="text" name="profilePic" {...getInputProps()} />
        {profilePic ? (
          <div></div>
        ) : (
          <div className="flex justify-center items-center gap-4 flex-col">
            <img
              src="/assets/icons/profile-placeholder.svg"
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
