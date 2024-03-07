import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AuthLayout,
  CreatePost,
  HomeLayout,
  Landing,
  Login,
  Register,
  SinglePost,
  UserProfile,
} from "./pages";
import { Toaster } from "@/components/ui/toaster";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
      },
      {
        path: "single-post/:id",
        element: <SinglePost />,
      },
      {
        path: "user-profile/:id",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <main className="h-screen">
        <RouterProvider router={router} />
        <Toaster />
      </main>
    </>
  );
}

export default App;
