/* eslint-disable i18next/no-literal-string */
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, memo, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { DropdownDirection } from "shared/types/ui";
import cls from "./Dropdown.module.scss";
import { AppLink } from "../AppLink/AppLink";

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": cls.optionsBottomLeft,
    "bottom right": cls.optionsBottomRight,
    "top left": cls.optionsTopLeft,
    "top right": cls.optionsTopRight,
};

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = "bottom right" } = props;
    const { t } = useTranslation();

    const optionalClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, optionalClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item.disabled}
                            type="button"
                            className={classNames(
                                cls.item,
                                { [cls.active]: active },
                                []
                            )}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
