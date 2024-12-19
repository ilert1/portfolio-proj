import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import cls from "./Flex.module.scss";

export type FlexJustify = "center" | "start" | "end" | "between";
export type FlexAlign = "start" | "end" | "center";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "32";

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = "start",
        align = "center",
        direction = "row",
        gap,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return <div className={classNames(cls.Flex, {}, classes)}>{children}</div>;
};
