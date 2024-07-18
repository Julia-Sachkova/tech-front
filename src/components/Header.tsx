import { Icon } from "@iconify/react";
import { ShowForPermission } from "./ShowForPermission";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between px-8 py-4 border-b border-neutral-400">
      <div className="flex flex-row items-center gap-2">
        <Icon icon="mingcute:code-line" width="36" height="36" />
        <span className="text-2xl">Sachkov Tech</span>
      </div>

      <div className="flex flex-row gap-3">
        <Icon icon="gg:profile" width="36" height="36" />

        <ShowForPermission permission="adminpanel">
          <Icon icon="gg:profile" width="36" height="36" />
        </ShowForPermission>
      </div>
    </header>
  );
};

export default Header;
