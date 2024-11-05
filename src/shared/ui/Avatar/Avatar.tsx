import { classNames, Mods } from "shared/lib/classNames/classNames";
import { CSSProperties, useMemo } from "react";
import cls from "./Avatar.module.scss";

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size, alt } = props;
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size]
    );

    const mods: Mods = {};
    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
