import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {memo} from 'react';
import cls from "./VStack.module.scss"

interface VStackProps {
    className?: string;
}

export const VStack = memo((props: VStackProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.VStack, {}, [className])}
        ></div>
    );
});