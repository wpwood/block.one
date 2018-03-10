import React from 'react';
import BlockContainer from '../BlockContainer';
import BlockDisplay from '../BlockDisplay';
import LoadBlockButton from '../LoadBlockButton';

import { shallow } from 'enzyme';

describe('BlockContainer', () => {
  let container;

  beforeEach(() => {
    container = shallow(<BlockContainer />);
  });

  it('renders a div with the expected block-container class', () => {
    expect(container.type()).toEqual('div');
    expect(container.prop('className')).toEqual('block-container');
  });

  it('initializes the state to uninitialized', () => {
    expect(container.state().block.status).toBe('uninitialized');
  });

  describe('the BlockDisplay', () => {
    let blockDisplay;

    beforeEach(() => {
      blockDisplay = container.childAt(0);
    });

    it('is a BlockDisplay component', () => {
      expect(blockDisplay.type()).toEqual(BlockDisplay);
    });

    it('gets the block as a property', () => {
      expect(blockDisplay.prop('block')).toEqual({status: 'uninitialized'});
    });
  });

  describe('the LoadBlockButton', () => {
    let button;

    beforeEach(() => {
      button = container.childAt(1);
    });

    it('is a LoadBlockButton component', () => {
      expect(button.type()).toEqual(LoadBlockButton);
    });

    it('changes the state to loading when clicked', () => {
      button.prop('onClick')();

      expect(container.state().block.status).toBe('loading');
    });
  });
});
