import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlesPageActions } from "../../slice/ArticlesPageSlice/ArticlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";

export const initAriclesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articleDetails/initAriclesPage", async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const _inited = getArticlesPageInited(getState());

    if (!_inited) {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({ page: 1 }));
    }
});
