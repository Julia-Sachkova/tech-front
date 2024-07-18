import { useContext } from "react";
import { PermissionContext } from "../contexts/PermissionContext";
import { UserContext } from "../contexts/UserContext";
import { PermissionProps } from "../types/Permissions";

export const ShowForPermission = (props: PermissionProps) => {
  const configuration = useContext(PermissionContext);
  const user = useContext(UserContext);

  const curPerm = configuration?.find((i) => i.perm === props.permission);
  const isAllowed = curPerm?.roles.find((i) => i === user?.role);

  if (isAllowed) {
    return props.children;
  } else {
    return null;
  }
};
