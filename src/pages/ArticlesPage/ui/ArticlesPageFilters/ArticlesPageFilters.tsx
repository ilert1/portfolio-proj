import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArticleView, ArticleViewSelector } from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Select } from "shared/ui/Select/Select";
import { getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import cls from "./ArticlesPageFilters.module.scss";
import { articlesPageActions } from "../../model/slice/ArticlesPageSlice/ArticlesPageSlice";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";

interface ArticlesPageFiltersProps {
    className?: string;
}
export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation("article-details");
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <Select label={t("Sort by")} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t("Search")} />
            </Card>
        </div>
    );
});
