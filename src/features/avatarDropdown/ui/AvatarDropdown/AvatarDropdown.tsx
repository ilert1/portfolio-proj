import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Dropdown } from "shared/ui/Popups/components/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { memo, useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "entities/User";
import cls from "./AvatarDropdown.module.scss";

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }
    return (
        <Dropdown
            direction="bottom left"
            className={cls.AvatarDropdown}
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t("Admin panel"),
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    content: t("profile"),
                    onClick: onLogout,
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t("Выйти"),
                    onClick: onLogout,
                },
            ]}
        />
    );
});
