import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    data: {
        age: 12,
        avatar,
        city: "Yerevan",
        country: Country.Armenia,
        currency: Currency.AMD,
        first: "David",
        lastname: "Grig",
        username: "ilert",
    },
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
Loading.decorators = [StoreDecorator({})];

export const withError = Template.bind({});
withError.args = {
    error: "true",
};
withError.decorators = [StoreDecorator({})];
