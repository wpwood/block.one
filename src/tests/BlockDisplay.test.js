import React from 'react';
import BlockDisplay from '../BlockDisplay';

import BlockInfo from '../BlockInfo';
import BlockLoading from '../BlockLoading';
import BlockPrompt from '../BlockPrompt';

import { shallow } from 'enzyme';

describe('BlockDisplay', () => {
  let display;

  describe('when the block status is uninitialized', () => {
    const block = {
      status: 'uninitialized'
    };

    beforeEach(() => {
      display = shallow(<BlockDisplay { ...{block} }/>);
    });

    it('renders a BlockPrompt component', () => {
      expect(display.type()).toEqual(BlockPrompt);
    });
  });

  describe('when the block status is loading', () => {
    const block = {
      status: 'loading'
    };

    beforeEach(() => {
      display = shallow(<BlockDisplay { ...{block} }/>);
    });

    it('renders a BlockLoading component', () => {
      expect(display.type()).toEqual(BlockLoading);
    });
  });

  describe('after the block has loaded', () => {
    const block = {
      status: 'loaded',
      info: {}
    };

    beforeEach(() => {
      display = shallow(<BlockDisplay { ...{block} }/>);
    });

    it('renders a BlockInfo component', () => {
      expect(display.type()).toEqual(BlockInfo);
    });

    it('passes the block to the BlockInfo component', () => {
      expect(display.find(BlockInfo).at(0).prop('block')).toEqual(block);
    });
  });
});