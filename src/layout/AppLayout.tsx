import { Outlet } from "react-router-dom";
import { Navbar } from "../components/common/navbar";
import { ScrollToHash } from "../hooks/ScrollToHash";
import { ScrollToTop } from "../components/common/ScrollToTop";

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <div className="pt-[calc(var(--navbar-y-padding)+var(--header-height))]">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
