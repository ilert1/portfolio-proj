import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ListBox } from "./ListBox";

export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { content: "123456", value: "123" },
        { content: "12345678", value: "1234" },
        { content: "1234567890", value: "1235" },
    ],
};
Normal.decorators = [];
