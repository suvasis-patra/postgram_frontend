import { BottomBar, TopBar, SideBar } from "@/components/custom";
import { useGetUser } from "@/lib/react-query/Queries";
import { userAtom } from "@/store/atoms/userAtom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";

const HomeLayout = () => {
  const { data } = useGetUser();
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    if (data) {
      setUser(data?.data);
    }
  }, [data, user, setUser]);
  return (
    <section className="w-full md:flex">
      <TopBar />
      <SideBar />
      <div className="w-full flex-1 h-full">
        <Outlet />
      </div>
      <BottomBar />
    </section>
  );
};

export default HomeLayout;
