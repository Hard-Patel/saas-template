import { Outlet } from "react-router-dom";
import { Navbar } from "../components/common/navbar";
import { ScrollToHash } from "../hooks/ScrollToHash";

const AppLayout = () => {
  return (
    <div>
      <ScrollToHash />
      <Navbar />
      <div className="pt-[calc(var(--navbar-y-padding)+var(--header-height))]">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
