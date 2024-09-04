import { Icon } from "@iconify/react";
import { ShowForPermission } from "./ShowForPermission";
import { Link } from "react-router-dom";
import { ADMIN } from "../constants/roles";

const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <header className="flex flex-row items-center justify-between px-3 sm:px-8 py-2 sm:py-4">
      <Link to="/">
        <div className="flex flex-row items-center gap-2">
          <Icon
            icon="mingcute:code-line"
            width="22"
            height="22"
            className="block sm:hidden"
          />
          <Icon
            icon="mingcute:code-line"
            width="36"
            height="36"
            className="hidden sm:block"
          />
          <span className="sm:text-2xl">Sachkov Tech</span>
        </div>
      </Link>

      <div className="flex flex-row gap-3">
        <ShowForPermission roles={[ADMIN]}>
          <Link to="/adminpanel">
            <Icon
              icon="material-symbols:analytics-outline-rounded"
              width="22"
              height="22"
              className="transition ease-in-out duration-300 hover:scale-110 block sm:hidden"
            />
            <Icon
              icon="material-symbols:analytics-outline-rounded"
              width="36"
              height="36"
              className="transition ease-in-out duration-300 hover:scale-110 hidden sm:block"
            />
          </Link>
        </ShowForPermission>

        <Link to={token ? "/profile" : "/login"}>
          <Icon
            icon="gg:profile"
            width="26"
            height="26"
            className="transition ease-in-out duration-300 hover:scale-110 block sm:hidden"
          />
          <Icon
            icon="gg:profile"
            width="36"
            height="36"
            className="transition ease-in-out duration-300 hover:scale-110 hidden sm:block"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
