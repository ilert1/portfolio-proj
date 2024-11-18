import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
    age: 12,
    city: "Yerevan",
    country: Country.Armenia,
    currency: Currency.AMD,
    first: "David",
    lastname: "Grig",
    username: "ilert",
};

describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true)
            )
        ).toEqual({ readonly: true });
    });

    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: "" },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test("test update profile", () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: "1234" },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: "123" })
            )
        ).toEqual({ form: { username: "123" } });
    });
    test("test update profile serivce pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({ isLoading: true, validateErrors: undefined });
    });
    test("test update profile serivce fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, "")
            )
        ).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
