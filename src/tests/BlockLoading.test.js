import React from 'react';
import BlockLoading from '../BlockLoading';

import { shallow } from 'enzyme';

describe('BlockLoading', () => {
  let loading;

  beforeEach(() => {
    loading = shallow(<BlockLoading />);
  });

  it('renders an h2 header', () => {
    expect(loading.type()).toEqual('h2');
  });

  it('shows the Block loading text', () => {
    expect(loading.text()).toEqual('Loading the block data');
  });
});
