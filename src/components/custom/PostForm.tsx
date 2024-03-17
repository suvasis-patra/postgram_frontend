import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FileUploader } from ".";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreatePost } from "@/lib/react-query/Queries";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  caption: z.string().min(2),
  location: z.string().min(2),
  tag: z.string().min(2),
  file: z.custom(),
});

const PostForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: createPost } = useCreatePost();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caption: "",
      tag: "",
      location: "",
      file: undefined,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log(values);

    try {
      const respones = await createPost(formData);
      console.log(respones);
      if (respones?.statusCode === 200) {
        navigate("/");
        form.reset();
      }
    } catch (error) {
      console.log("something went wrong, failed to create new post");
    }
  }
  return (
    <div>
      <Form {...form}>
        <div className="flex flex-col gap-4 w-full pt-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label text-xl">
                    Add photo
                  </FormLabel>
                  <FormControl>
                    <FileUploader fieldChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label text-xl">
                    caption
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="shad-input"
                      placeholder="What is happening?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label text-xl">
                    location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Where?"
                      {...field}
                      className="shad-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label text-xl">
                    tags
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="tags"
                      {...field}
                      className="shad-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-6">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
