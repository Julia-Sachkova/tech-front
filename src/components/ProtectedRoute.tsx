import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { PermissionProps } from "../types/Permissions";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props: PermissionProps) => {
  const user = useContext(UserContext);

  const isAllowed = props.roles.find((r) => r === user?.role);

  if (isAllowed) {
    return props.children;
  } else {
    return <Navigate to="/" replace />;
  }
};
