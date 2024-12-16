import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/model/types/article";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation("article-details");

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("All articles"),
            },
            {
                value: ArticleType.IT,
                content: t("IT"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("Economics"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("Science"),
            },
        ],
        [t]
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType]
    );

    return (
        <Tabs
            onTabClick={onTabClick}
            tabs={typeTabs}
            value={value}
            className={classNames("", {}, [className])}
        />
    );
});
