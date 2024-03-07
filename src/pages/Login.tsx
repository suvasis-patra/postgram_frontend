import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(8, "Username is too short").max(32),
  password: z
    .string()
    .min(8, "Password is too weak, Atleast have 8 charecters")
    .max(32),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="flex justify-center items-center sm:w-420 flex-col gap-4">
        <h3 className="text-2xl font-bold text-blue-700 capitalize">
          Welcom back!
        </h3>
        <p className="font-mono text-blue-600 font-semibold text-xl capitalize">
          Login your account
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="shad-form">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="username..."
                    {...field}
                    className="shad-input"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="password..."
                    {...field}
                    className="shad-input"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/auth/register" className="underline text-blue-500">
              register here
            </Link>
          </p>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Form>
  );
};

export default Login;
