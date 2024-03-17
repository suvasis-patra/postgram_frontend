import { sidebarLinks } from "@/constants";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/store/atoms/userAtom";
import { useLogoutUser } from "@/lib/react-query/Queries";
const SideBar = () => {
  const { mutateAsync: logoutUser } = useLogoutUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useRecoilValue(userAtom);
  console.log(user);
  const logoutHandler = async () => {
    try {
      const response = await logoutUser();
      console.log(response);
      if (response?.statusCode === 200) {
        navigate("/auth/login");
      }
    } catch (error) {
      console.log("something went wrong, failed to logout user");
    }
  };
  return (
    <section className="hidden md:flex flex-col gap-2 min-w-[250px] justify-between px-2  shadow-md hover:overflow-y-auto bg-gray-50">
      <div className="py-6">
        <h3 className="font-mono text-2xl font-bold text-blue-500 text-center">
          Postgram
        </h3>
        <Link
          to={`/user/${user._id}`}
          className="flex gap-2 items-center mt-4 rounded-xl shadow-md p-2 hover:bg-blue-200"
        >
          <img src="/assets/img/profile.png" alt="profile" />
          <div>
            {" "}
            <p className="font-bold text-blue-800 capitalize text-lg">
              {user.name}
            </p>
            <p className="text-gray-600 text-md">@{user.username}</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route;
          return (
            <NavLink
              key={link.label}
              to={link.route}
              className={`flex gap-4 font-semibold items-center py-4 px-2  text-lg  hover:bg-blue-200 hover:rounded-md hover:text-blue-800 transition ${
                isActive ? "bg-blue-200 rounded-md text-blue-800" : ""
              }`}
            >
              <span>
                <img src={link.imgURL} alt={link.label} />
              </span>
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="shad-button_ghost"
          onClick={logoutHandler}
        >
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p className="text-lg font-semibold">Logout</p>
        </Button>
      </div>
    </section>
  );
};

export default SideBar;
