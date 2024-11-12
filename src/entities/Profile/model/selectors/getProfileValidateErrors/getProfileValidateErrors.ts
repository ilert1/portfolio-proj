import { StateSchema } from "app/providers/StoreProvider";

export const getProfileValidateErrors = (state: StateSchema) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state?.profile?.validateError;
