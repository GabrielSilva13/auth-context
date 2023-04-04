import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateUserPermissions } from "../utils/validateUserPermissions";

type UseCanParms = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ roles, permissions }: UseCanParms) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) return false;

  const userHasValidPermissions = validateUserPermissions({
    user,
    roles,
    permissions,
  });

  return userHasValidPermissions;
}
