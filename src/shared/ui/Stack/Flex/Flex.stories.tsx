import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Flex } from "./Flex";

export default {
    title: "shared/Flex",
    component: Flex,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    gap: "8",
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: "column",
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    direction: "column",
    gap: "4",
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
};
