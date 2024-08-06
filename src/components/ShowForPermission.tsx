import { PermissionProps } from "../types/Permissions";
import { useAppSelector } from "../hooks";

export const ShowForPermission = (props: PermissionProps) => {
  const user = useAppSelector((state) => state.user.user);

  const isAllowed = props.roles.find((r) => r === user?.role);

  if (isAllowed) {
    return props.children;
  } else {
    return null;
  }
};
