import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
    test("should return error", () => {
        const data = {
            age: 12,
            city: "Yerevan",
            country: Country.Armenia,
            currency: Currency.AMD,
            first: "David",
            lastname: "Grig",
            username: "ilert",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
