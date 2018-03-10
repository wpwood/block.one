import React from 'react';
import BlockInfo from '../BlockInfo';

import { shallow } from 'enzyme';

describe('BlockInfo', () => {
  let info;

  beforeEach(() => {
    info = shallow(<BlockInfo />);
  });

  it('renders an h2', () => {
    expect(info.type()).toEqual('h2');
  });

  it('shows the Block info', () => {
    expect(info.text()).toEqual('Here is the block');
  });
});
