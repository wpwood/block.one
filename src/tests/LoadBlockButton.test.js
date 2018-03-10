import React from 'react';
import LoadBlockButton from '../LoadBlockButton';

import { shallow } from 'enzyme';

describe('LoadBlockButton', () => {
  let button, onClick;

  beforeEach(() => {
    onClick = jest.fn();

    button = shallow(<LoadBlockButton onClick={onClick}/>);
  });

  it('renders a button', () => {
    expect(button.type()).toEqual('button');
  });

  it('triggers the onClick property when clicked', () => {
    button.prop('onClick')();

    expect(onClick).toHaveBeenCalled();
  });
});
