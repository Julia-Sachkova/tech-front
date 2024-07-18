export type Permission = {
  perm: string;
  roles: string[];
};

export type Permissions = Permission[];

export type PermissionProps = {
  permission: string;
  children: React.ReactNode;
};
