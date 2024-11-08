import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "entities/Country/model/types/country";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options: SelectOption[] = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation("");

    const { className, value, readonly, onChange } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    return (
        <Select
            className={classNames("", {}, [className])}
            label={t("Select_country")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
