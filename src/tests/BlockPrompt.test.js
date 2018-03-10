import React from 'react';
import BlockPrompt from '../BlockPrompt';

import { shallow } from 'enzyme';

describe('BlockPrompt', () => {
  let prompt;

  beforeEach(() => {
    prompt = shallow(<BlockPrompt />);
  });

  it('renders an h2 header', () => {
    expect(prompt.type()).toEqual('h2');
  });

  it('shows the Block prompt text', () => {
    expect(prompt.text()).toEqual('Press the button to load the block');
  });
});
