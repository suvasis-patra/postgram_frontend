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
import { Link, useNavigate } from "react-router-dom";
import { useLoginUser } from "@/lib/react-query/Queries";

const formSchema = z.object({
  username: z.string().min(2, "Username is too short").max(32),
  password: z
    .string()
    .min(8, "Password is too weak, Atleast have 8 charecters")
    .max(32),
});

const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginUser, status } = useLoginUser();
  const loading = status === "pending";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await loginUser(values);
      if (user) {
        form.reset();
        navigate("/");
      }
      console.log(values);
    } catch (error) {
      console.log(error);
    }
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
                    type="text"
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
                    type="password"
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
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default Login;
