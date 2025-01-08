import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { functionName } from '../services/functionName/functionName';
import { ForbiddenPage } from '../types/pages';
// import { ForbiddenPageSchema } from '../types/ForbiddenPageSchema';

// const initialState: ForbiddenPageSchema = {
//     isLoading: false,
//     error: undefined,
//     data: undefined,
// };

export const ForbiddenPageSlice = createSlice({
    name: 'ForbiddenPage',
//    initialState,
    reducers: {},
    extraReducers: (builder) => {
//        builder
//            .addCase(functionName.pending, (state) => {
//                state.error = undefined;
//                state.isLoading = true;
//            })
//            .addCase(functionName.fulfilled, (
//                state,
//                action: PayloadAction<ForbiddenPage>,
//            ) => {
//                state.isLoading = false;
//                state.data = action.payload;
//            })
//            .addCase(functionName.rejected, (state, action) => {
//                state.isLoading = false;
//                state.error = action.payload;
//            });
    },
});

export const { actions: ForbiddenPageActions } = ForbiddenPageSlice;
export const { reducer: ForbiddenPageReducer } = ForbiddenPageSlice;