import React from 'react';
import BlockError from '../BlockError';

import { shallow } from 'enzyme';

describe('BlockError', () => {
  let error;
  const block = {
    status: 'errored',
    error: 'Unable to fetch'
  };

  beforeEach(() => {
    error = shallow(<BlockError { ...{block} }/>);
  });

  it('renders an h2 header', () => {
    expect(error.type()).toEqual('h2');
  });

  it('has the error class', () => {
    expect(error.prop('className')).toEqual('error');
  });

  it('shows the Block error text', () => {
    expect(error.text()).toEqual('Unable to load the block data: Unable to fetch');
  });
});
