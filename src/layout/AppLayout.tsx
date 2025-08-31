import { Outlet } from "react-router-dom";
import { Navbar } from "../components/common/navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[calc(var(--navbar-y-padding)+var(--header-height))]">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
