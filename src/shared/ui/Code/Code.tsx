import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, ReactNode } from "react";
import CopyIcon from "shared/assets/icons/copy-20-20.svg";
import cls from "./Code.module.scss";
import { Button, ButtonTheme } from "../Button/Button";
import { Icon } from "../Icon/Icon";

interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code = memo((props: CodeProps) => {
    const { t } = useTranslation();

    const { className, children } = props;

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{children}</code>
        </pre>
    );
});
