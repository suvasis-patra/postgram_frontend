import { PostForm } from "@/components/custom";

const CreatePost = () => {
  return (
    <section className="flex py-6 px-10 flex-col w-full">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-500">Create Post</h1>
      </div>
      <PostForm />
    </section>
  );
};

export default CreatePost;
