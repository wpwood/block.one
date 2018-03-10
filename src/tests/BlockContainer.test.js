import React from 'react';
import BlockContainer from '../BlockContainer';
import BlockDisplay from '../BlockDisplay';
import LoadBlockButton from '../LoadBlockButton';

import Eos from 'eosjs';
import { shallow } from 'enzyme';

const dummy_chain_info = {
  head_block_num: 42
};

const dummy_block_info = {
  previous:"003d620baccc422f7238c676ce1784d2b2abfbb57a14e14728c3ef6b1fbe475c",
  timestamp:"2018-03-10T16:03:12",
  transaction_merkle_root:"0000000000000000000000000000000000000000000000000000000000000000",
  producer:"initn",
  producer_changes:[],
  producer_signature:"1f59b64d0fa73b5ec3bc24f3dca64f6136a04d4205fdf033124ee952ed8e92ca4638ba5d43f1ff940b7aa6e4f8cd0fcc6333d1f36e222739b5a560d82537e00338",
  cycles:[],
  id:"003d620cdfb58c7cc7d801ea95f04cd0b737b0105a06fe4b377e168fcbbc1cd6",
  block_num:42,
  ref_block_prefix:3925989575
};

describe('BlockContainer', () => {
  let eos, container;

  beforeEach(() => {
    eos = {
      getInfo: jest.fn().mockReturnValue(new Promise((resolve) => resolve(dummy_chain_info))),
      getBlock: jest.fn().mockReturnValue(new Promise((resolve) => resolve(dummy_block_info)))
    };
    jest.spyOn(Eos, 'Testnet').mockReturnValue(eos);

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

  describe('when loading data', () => {
    beforeEach(() => {
      container.find(LoadBlockButton).at(0).prop('onClick')();
    });

    it('connects to the Testnet', () => {
      expect(Eos.Testnet).toHaveBeenCalledWith({httpEndpoint: 'http://t1readonly.eos.io'});
    });

    it('fetches the chain info', () => {
      expect(eos.getInfo).toHaveBeenCalledWith({});
    });

    it('fetches the block info', () => {
      expect(eos.getBlock).toHaveBeenCalledWith(42);
    });

    it('sets the status to loaded', () => {
      expect(container.state().block.status).toBe('loaded');
    });

    it('stores the block info', () => {
      expect(container.state().block.block).toEqual(dummy_block_info);
    });
  });

  describe('when failing to load data', () => {
    beforeEach(() => {
      eos = {
        getInfo: jest.fn().mockReturnValue(
          new Promise((resolve, reject) => reject('Inconceivable!')))
      };
      jest.spyOn(Eos, 'Testnet').mockReturnValue(eos);
      container.find(LoadBlockButton).at(0).prop('onClick')();
    });

    it('sets the status to loaded', () => {
      expect(container.state().block.status).toBe('errored');
    });

    it('stores the block info', () => {
      expect(container.state().block.error).toEqual('Inconceivable!');
    });
  });
});
