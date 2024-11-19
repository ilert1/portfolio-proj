import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation();

    const { className } = props;

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Articles details page
        </div>
    );
};
export default memo(ArticleDetailsPage);
