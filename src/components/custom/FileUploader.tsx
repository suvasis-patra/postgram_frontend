import { useDropzone, FileWithPath } from "react-dropzone";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";

interface FileUploaderPorps {
  fieldChange: (file: FileWithPath) => void;
}
const FileUploader = ({ fieldChange }: FileUploaderPorps) => {
  const [file, setFile] = useState<FileWithPath | null>(null);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
    fieldChange(acceptedFiles[0]);
  }, []);
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [".png", ".jpg", ".svg", ".jpeg"] },
  });
  if (file) console.log(URL.createObjectURL(file));
  return (
    <div
      {...getRootProps()}
      className="flex rounded-md border-[1px] justify-center items-center  cursor-pointer"
    >
      <input
        type="text"
        name="file"
        {...getInputProps()}
        className="cursor-pointer"
      />
      {file ? (
        <div className="flex justify-center items-center w-full flex-1 p-2">
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="file_uploader-img"
          />
        </div>
      ) : (
        <div className="file_uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            alt=""
            height={77}
            width={96}
          />
          <h3 className="text-blue-500 font-semibold text-lg mb-2 mt-6">
            Drag and Drop here
          </h3>
          <p className="mb-2">JPGE,PNG,SVG</p>
          <Button type="button" className="bg-blue-500 hover:bg-blue-800 ">
            Select from Computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
