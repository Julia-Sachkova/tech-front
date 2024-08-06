import { PermissionProps } from "../types/Permissions";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

export const ProtectedRoute = (props: PermissionProps) => {
  const user = useAppSelector((state) => state.user.user);

  const isAllowed = props.roles.find((r) => r === user?.role);

  if (isAllowed) {
    return props.children;
  } else {
    return <Navigate to="/" replace />;
  }
};
