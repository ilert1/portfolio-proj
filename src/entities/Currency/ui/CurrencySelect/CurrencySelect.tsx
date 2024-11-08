import { Currency } from "entities/Currency/model/types/currency";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { classNames } from "shared/lib/classNames/classNames";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
const options: SelectOption[] = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.AMD, content: Currency.AMD },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation("profile");

    const { className, value, readonly, onChange } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );

    return (
        <Select
            className={classNames("", {}, [className])}
            label={t("Select_currency")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
