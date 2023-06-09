type User = {
  permissions: string[];
  roles: string[];
};

type validateUserPermissionsParms = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export const validateUserPermissions = ({
  user,
  roles,
  permissions,
}: validateUserPermissionsParms) => {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permisson) => {
      return user.permissions.includes(permisson);
    });

    if (!hasAllPermissions) return false;
  }
  if (roles?.length > 0) {
    const hasAllRoles = roles.some((role) => {
      return user.roles.includes(role);
    });

    if (!hasAllRoles) return false;
  }
  return true;
};
