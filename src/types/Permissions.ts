export type Permission = {
  perm: string;
  roles: string[];
};

export type Permissions = Permission[];

export type PermissionProps = {
  roles: string[];
  children: React.ReactNode;
};
