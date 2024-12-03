import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleTextBlock } from "entities/Article/model/types/article";
import cls from "./ArticleTextBlockComponent.module.scss";
import { Text } from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { t } = useTranslation();

        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    }
);
