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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useCreateUser } from "@/lib/react-query/Queries";

const formSchema = z.object({
  username: z.string().min(2, "Username is too short").max(32),
  name: z.string().min(2, "to short name").max(32),
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Password is too weak, Atleast have 8 charecters")
    .max(32),
});

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutateAsync: createAccount, isPending } = useCreateUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await createAccount(values);
      if (user) {
        navigate("/auth/login");
        form.reset();
      }
    } catch (error: any) {
      toast({ description: "failed to register" });
    }
  }
  return (
    <Form {...form}>
      <div className="flex justify-center items-center sm:w-420 flex-col gap-4">
        <h3 className="text-2xl font-bold text-blue-700">
          Welcom to{" "}
          <span className="text-black font-mono font-bold">Postgram!</span>
        </h3>
        <p className="font-mono text-blue-600 font-semibold text-xl capitalize">
          create new account
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
                    type="text"
                    placeholder="name..."
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
                    type="email"
                    placeholder="email..."
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
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline text-blue-500">
              login here
            </Link>
          </p>
          <Button
            type="submit"
            className="bg-blue-500 text-white disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {isPending ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              "submit"
            )}
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default Register;
