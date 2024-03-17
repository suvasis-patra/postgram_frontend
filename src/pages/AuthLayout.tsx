import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-between h-screen w-full">
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>

      <img
        src="/assets/img/side-img.svg"
        alt=""
        className="hidden xl:block w-1/2 object-cover bg-no-repeat"
      />
    </div>
  );
};

export default AuthLayout;
