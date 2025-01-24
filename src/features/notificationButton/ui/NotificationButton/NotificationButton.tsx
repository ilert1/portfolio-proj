import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Icon } from "@/shared/ui/Icon/Icon";
import NotificationIcon from "@/shared/assets/icons/Notification_20_20.svg";
import { Popover } from "@/shared/ui/Popups";
import { NotificationList } from "@/entities/Notification";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} />
        </Button>
    );
    return (
        <div>
            <BrowserView>
                <Popover
                    direction="bottom left"
                    trigger={trigger}
                    // eslint-disable-next-line i18next/no-literal-string
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
