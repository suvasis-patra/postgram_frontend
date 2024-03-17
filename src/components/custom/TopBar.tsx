import { Button } from "../ui/button";

const TopBar = () => {
  return (
    <section className="topbar flex px-8 py-4 justify-between items-center">
      <div>
        <h3 className="font-mono text-2xl font-bold text-blue-500">Postgram</h3>
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="ghost" className="shad-button_ghost">
          <img src="./assets/icons/logout.svg" alt="logout" />
        </Button>
        <img
          src="./assets/icons/profile-placeholder.svg"
          alt="profile"
          height={30}
          width={30}
        />
      </div>
    </section>
  );
};

export default TopBar;
