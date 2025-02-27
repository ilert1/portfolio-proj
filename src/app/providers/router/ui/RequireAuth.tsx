import { useSelector } from "react-redux";
import { getUserAuthData, getUserRoles } from "@/entities/User";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { ReactNode, useMemo } from "react";
import { UserRole } from "@/entities/User/model/consts/consts";

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasReuqiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    if (!hasReuqiredRoles) {
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
