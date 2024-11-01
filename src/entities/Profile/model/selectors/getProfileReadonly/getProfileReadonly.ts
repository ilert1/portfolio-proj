import { StateSchema } from "app/providers/StoreProvider";

export const getProfileReadonly = (state: StateSchema) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state?.profile?.readonly;
