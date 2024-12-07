import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Code } from "shared/ui/Code/Code";

export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: `import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Code } from "shared/ui/Code/Code";

export default {
    title: "shared/Code",
    component: Code,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});`,
};
