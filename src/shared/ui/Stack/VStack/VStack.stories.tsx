import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {VStack} from './VStack';

export default {
   title: 'shared/VStack',
   component: VStack,
   argTypes: {
       backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => (
<VStack {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};