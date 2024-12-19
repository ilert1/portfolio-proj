import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {memo} from 'react';
import cls from "./HStack.module.scss"

interface HStackProps {
    className?: string;
}

export const HStack = memo((props: HStackProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.HStack, {}, [className])}
        ></div>
    );
});