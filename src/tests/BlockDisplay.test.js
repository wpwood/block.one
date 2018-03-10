import React from 'react';
import BlockDisplay from '../BlockDisplay';

import BlockError from '../BlockError';
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

  describe('when the block status is errored', () => {
    const block = {
      status: 'errored',
      error: 'Unable to fetch'
    };

    beforeEach(() => {
      display = shallow(<BlockDisplay { ...{block} }/>);
    });

    it('renders a BlockError component', () => {
      expect(display.type()).toEqual(BlockError);
    });

    it('passes the block to the BlockError component', () => {
      expect(display.find(BlockError).at(0).prop('block')).toEqual(block);
    });
  });

  describe('after the block has loaded', () => {
    const block = {
      status: 'loaded',
      block: {}
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
