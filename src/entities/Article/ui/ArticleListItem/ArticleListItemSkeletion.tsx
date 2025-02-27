import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { ArticleView } from "@/entities/Article/model/consts/consts";
import cls from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletionProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletionProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton width={30} height={30} border="50%" />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.username}
                            />
                            <Skeleton
                                className={cls.date}
                                width={150}
                                height={16}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={cls.title}
                        />

                        <Skeleton className={cls.img} height={200} />

                        <div className={cls.footer}>
                            <Skeleton
                                className={cls.img}
                                height={36}
                                width={200}
                            />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            border="50%"
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} />
                </Card>
            </div>
        );
    }
);
