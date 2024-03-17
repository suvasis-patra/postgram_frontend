import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AuthLayout,
  CreatePost,
  HomeLayout,
  Landing,
  Login,
  Register,
  SinglePost,
  EditUserProfile,
  Explore,
  SavedPost,
  UserPorfile,
  GetAllUser,
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
        path: "edit-user-profile/:id",
        element: <EditUserProfile />,
      },
      {
        path: "user/:userId",
        element: <UserPorfile />,
      },
      {
        path: "all-users",
        element: <GetAllUser />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "saved",
        element: <SavedPost />,
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
      <main className="flex h-screen">
        <RouterProvider router={router} />
        <Toaster />
      </main>
    </>
  );
}

export default App;
