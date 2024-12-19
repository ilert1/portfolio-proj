import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { Text, TextSize } from "shared/ui/Text/Text";
import { AutoSizer, List, WindowScroller } from "react-virtualized";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeletion";
import { PAGE_ID } from "widgets/Page/Page";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletions = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => {
        return (
            <ArticleListItemSkeleton
                view={view}
                key={index}
                className={cls.card}
            />
        );
    });

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation("article-details");
    const renderArticles = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                className={cls.card}
                key={article.id}
                target={target}
            />
        );
    };

    // const rowRenderer = ({ index, isScrolling, key, style }) => {
    //     const { showScrollingPlaceholder, useDynamicRowHeight } = this.state;

    //     if (showScrollingPlaceholder && isScrolling) {
    //         return (
    //             <div
    //                 className={clsx(styles.row, styles.isScrollingPlaceholder)}
    //                 key={key}
    //                 style={style}
    //             >
    //                 Scrolling...
    //             </div>
    //         );
    //     }
    // };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t("Articles not found")} />
            </div>
        );
    }

    return (
        <WindowScroller
            onScroll={() => console.log("scroll")}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({ height, width }) => (
                <List
                    height={height}
                    rowCount={articles.length}
                    rowHeight={500}
                    // eslint-disable-next-line react/no-unstable-nested-components
                    rowRenderer={() => <div>Row</div>}
                    width={500}
                />
            )}
        </WindowScroller>

        // <div
        //     className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        // >
        //     {articles.length > 0 ? articles.map(renderArticles) : null}
        //     {isLoading && getSkeletions(view)}
        // </div>
    );
});
