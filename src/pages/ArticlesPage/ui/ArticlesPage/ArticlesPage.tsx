/* eslint-disable max-len */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleList } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList isLoading view={ArticleView.BIG} articles={[]} />
        </div>
    );
};

export default memo(ArticlesPage);
