import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommentList } from "./CommentList";

export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: "1",
            text: "abc",
            user: { id: "1", username: "abc" },
        },
        {
            id: "2",
            text: "cba",
            user: { id: "2", username: "pda" },
        },
    ],
};
export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
