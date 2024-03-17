import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { useRecoilValue } from "recoil";
import { userAtom } from "@/store/atoms/userAtom";
import { useEffect } from "react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, "Username is too short").max(50),
  name: z.string().min(2, "Name is too short"),
  email: z.string().email(),
  bio: z.string().min(2, "to shor bio"),
});
const ProfileForm = () => {
  const user = useRecoilValue(userAtom);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.username,
      name: user?.name,
      email: user?.email,
      bio: user?.bio,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  useEffect(() => {
    form.setValue("username", user?.username);
    form.setValue("name", user?.name);
    form.setValue("email", user?.email);
  }, [user, form]);
  return (
    <div>
      <Form {...form}>
        <div className="flex flex-col gap-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username..."
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name.."
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email..."
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
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Bio..."
                      {...field}
                      className="shad-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4 justify-end items-center">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-500 text-white">
                Edit
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default ProfileForm;
