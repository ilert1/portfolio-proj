import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UISchema } from "../types/UISchema";

const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
