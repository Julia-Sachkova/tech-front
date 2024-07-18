import { createContext } from "react";
import { Permissions } from "../types/Permissions";

export const PermissionContext = createContext<Permissions | null>(null);
