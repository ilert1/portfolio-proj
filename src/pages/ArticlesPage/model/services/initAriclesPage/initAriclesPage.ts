import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType } from "entities/Article";
import { SortOrder } from "shared/types";
import { articlesPageActions } from "../../slice/ArticlesPageSlice/ArticlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";

export const initAriclesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("articleDetails/initAriclesPage", async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const _inited = getArticlesPageInited(getState());

    if (!_inited) {
        const orderFromUrl = searchParams.get("order") as SortOrder;
        const sortFromUrl = searchParams.get("sort") as ArticleSortField;
        const searchFromUrl = searchParams.get("search");
        const typeFromUrl = searchParams.get("type") as ArticleType;

        if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(articlesPageActions.setType(typeFromUrl));
        }

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
