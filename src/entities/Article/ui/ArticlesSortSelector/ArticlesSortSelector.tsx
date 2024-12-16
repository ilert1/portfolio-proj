import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import cls from "./ArticlesSortSelector.module.scss";

interface ArticlesSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
    const { t } = useTranslation("article-details");

    const { className, sort, order, onChangeOrder, onChangeSort } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("Ascending"),
            },
            {
                value: "desc",
                content: t("Descending"),
            },
        ],
        [t]
    );
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t("Creation date"),
            },
            {
                value: ArticleSortField.TITLE,
                content: t("name"),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t("views"),
            },
        ],
        [t]
    );

    return (
        <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t("Sort by")}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t("By")}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
