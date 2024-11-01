import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className]
                )}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Error occured when fetching data")}
                    text={t("Try to reload the page")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t("Your name")}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Your lastname")}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
};
