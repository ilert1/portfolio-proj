import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addCommentForm";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { VStack } from "shared/ui/Stack";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { addCommentFormArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const comments = useSelector(getArticleComments.selectAll);

        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentFormArticle(text));
            },
            [dispatch]
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
            // dispatch(fetchArticleRecommendations());
        });

        return (
            <VStack gap="16" max className={classNames("", {}, [className])}>
                <Text size={TextSize.L} title={t("Комментарии")} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    }
);
