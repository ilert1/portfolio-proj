import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Icon } from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/Notification_20_20.svg";
import { Popover } from "shared/ui/Popups";
import { NotificationList } from "entities/Notification";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            direction="bottom left"
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} />
                </Button>
            }
            // eslint-disable-next-line i18next/no-literal-string
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
