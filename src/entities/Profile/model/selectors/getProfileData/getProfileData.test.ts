import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";

describe("getProfileData.test", () => {
    test("should return error", () => {
        const data = {
            age: 12,
            avatar,
            city: "Yerevan",
            country: Country.Armenia,
            currency: Currency.AMD,
            first: "David",
            lastname: "Grig",
            username: "ilert",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
