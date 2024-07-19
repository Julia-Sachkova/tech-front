import { Icon } from "@iconify/react";
import { ShowForPermission } from "./ShowForPermission";
import { Link } from "react-router-dom";
import { ADMIN } from "../constants/roles";

const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <header className="flex flex-row items-center justify-between px-8 py-4 border-b border-neutral-400">
      <Link to="/">
        <div className="flex flex-row items-center gap-2">
          <Icon icon="mingcute:code-line" width="36" height="36" />
          <span className="text-2xl">Sachkov Tech</span>
        </div>
      </Link>

      <div className="flex flex-row gap-3">
        <ShowForPermission roles={[ADMIN]}>
          <Link to="/adminpanel">
            <Icon
              icon="material-symbols:analytics-outline-rounded"
              width="36"
              height="36"
            />
          </Link>
        </ShowForPermission>

        <Link to={token ? "/profile" : "/login"}>
          <Icon icon="gg:profile" width="36" height="36" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
