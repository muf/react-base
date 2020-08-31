import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CounterPresenter, CounterPresenterProps } from './Counter';

export default {
  title: 'Counter'
} as Meta;

const callbackCreator = (message: String) => () => {
    console.log(message);
}
const Template: Story<CounterPresenterProps> = (args) => <CounterPresenter {...args} />;

export const TestOne = Template.bind({});
TestOne.args = {
  count: 1
  , onIncrementClick: callbackCreator('increment')
  , onDecrementClick: callbackCreator('decrement')
} as CounterPresenterProps;

export const TestTwo = Template.bind({});
TestTwo.args = {
    count: 2
    , onIncrementClick: callbackCreator('increment')
    , onDecrementClick: callbackCreator('decrement')
  } as CounterPresenterProps;

