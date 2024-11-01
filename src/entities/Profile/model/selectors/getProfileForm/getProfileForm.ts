import { StateSchema } from "app/providers/StoreProvider";

export const getProfileForm = (state: StateSchema) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state?.profile?.form;
