// import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
// import { fetchNextArticlePage } from "./fetchNextArticlePage";
// import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

// jest.mock("../fetchArticlesList/fetchArticlesList");

// describe("fetchNextArticlePage.test", () => {
//     test("success", async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticlePage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//             },
//         });

//         const result = await thunk.callThunk();

//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
//     });
//     test("fetchArticleList not called", async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticlePage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: false,
//             },
//         });

//         const result = await thunk.callThunk();

//         expect(thunk.dispatch).toBeCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
