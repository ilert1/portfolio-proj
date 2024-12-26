import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleList } from "entities/Article";
import { Text } from "shared/ui/Text/Text";
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { initAriclesPage } from "../../model/services/initAriclesPage/initAriclesPage";
import { getArticles } from "../../model/slice/ArticlesPageSlice/ArticlesPageSlice";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initAriclesPage(searchParams));
    });

    if (error) {
        // eslint-disable-next-line i18next/no-literal-string
        return <Text text="Error" />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
            // eslint-disable-next-line i18next/no-literal-string
            target="_blank"
        />
    );
});
