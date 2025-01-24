import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "@/entities/Article";
import { HStack } from "@/shared/ui/Stack";
import { getCanEditArticle } from "../../model/selectors/article";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation("article-details");
        const navigate = useNavigate();

        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);
        const onBackToList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            // eslint-disable-next-line no-unsafe-optional-chaining
            navigate(`${`${RoutePath.articles}/${article?.id}`}/edit`);
        }, [article?.id, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames("", {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t("Back to list")}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t("Edit")}
                    </Button>
                )}
            </HStack>
        );
    }
);
