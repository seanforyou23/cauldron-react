import React from 'react';
import { mount } from 'enzyme';
import Trigger from 'src/components/OptionsMenu/OptionsMenuTrigger';
import { axe } from 'jest-axe';

test('handles clicks', () => {
  expect.assertions(3);
  let called = false;
  const trigger = mount(<Trigger onClick={() => (called = true)} />);
  expect(trigger.state('expanded')).toBe(false);
  trigger.simulate('click');
  expect(called).toBeTruthy();
  expect(trigger.state('expanded')).toBe(true);
});

test('handles keydowns', () => {
  expect.assertions(2);
  let called = false,
    clicked = false;
  const trigger = mount(<Trigger onKeyDown={() => (called = true)} />);
  const domElement = trigger.getDOMNode();
  domElement.addEventListener('click', () => (clicked = true));
  trigger.simulate('keydown', { which: 40 });

  expect(called).toBeTruthy();
  expect(clicked).toBeTruthy();
});

test('should return no axe violations', async () => {
  const trigger = mount(<Trigger>Click me, I am a trigger!</Trigger>);
  expect(await axe(trigger.html())).toHaveNoViolations();
});