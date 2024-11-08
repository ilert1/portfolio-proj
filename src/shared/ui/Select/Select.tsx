import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useCallback, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const { label, options, value, readonly, onChange, className } = props;

    const mods: Mods = {};

    const optionsList = useMemo(
        () =>
            options?.map((el) => {
                return (
                    <option
                        className={cls.option}
                        value={el.value}
                        key={el.value}
                    >
                        {el.content}
                    </option>
                );
            }),
        [options]
    );

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) {
                onChange(e.target.value);
            }
        },
        [onChange]
    );

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                name=""
                id=""
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
