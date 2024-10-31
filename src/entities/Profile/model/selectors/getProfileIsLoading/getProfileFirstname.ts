import { StateSchema } from "app/providers/StoreProvider";

export const getProfileIsLoading = (state: StateSchema) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state?.profile?.isLoading;
