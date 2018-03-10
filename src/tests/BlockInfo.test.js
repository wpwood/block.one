import React from 'react';
import BlockInfo from '../BlockInfo';

import { shallow } from 'enzyme';

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

const block = {
  status: 'loaded',
  block: dummy_block_info
};

describe('BlockInfo', () => {
  let info;

  beforeEach(() => {
    info = shallow(<BlockInfo { ...{block} }/>);
  });

  it('renders a wrapping div', () => {
    expect(info.type()).toEqual('div');
  });

  describe('the header', () => {
    let header;

    beforeEach(() => {
      header = info.find('h2').at(0);
    });

    it('renders as an h2', () => {
      expect(header.type()).toEqual('h2');
    });

    it('shows the Block header text', () => {
      expect(header.text()).toEqual('Here is the block');
    });
  });

  describe('the list', () => {
    let list;

    beforeEach(() => {
      list = info.find('ul').at(0);
    });

    it('renders as an unordered list', () => {
      expect(list.type()).toEqual('ul');
    });

    it('renders the expected list items', () => {
      const items = list.find('li');
      expect(items.length).toBe(8);

      expect(items.at(0).text()).toEqual(
        'previous : 003d620baccc422f7238c676ce1784d2b2abfbb57a14e14728c3ef6b1fbe475c'
      );
      expect(items.at(1).text()).toEqual(
        'timestamp : 2018-03-10T16:03:12'
      );
      expect(items.at(2).text()).toEqual(
        'transaction_merkle_root : 0000000000000000000000000000000000000000000000000000000000000000'
      );
      expect(items.at(3).text()).toEqual(
        'producer : initn'
      );
      expect(items.at(4).text()).toEqual(
        'producer_signature : 1f59b64d0fa73b5ec3bc24f3dca64f6136a04d4205fdf033124ee952ed8e92ca4638ba5d43f1ff940b7aa6e4f8cd0fcc6333d1f36e222739b5a560d82537e00338'
      );
      expect(items.at(5).text()).toEqual(
        'id : 003d620cdfb58c7cc7d801ea95f04cd0b737b0105a06fe4b377e168fcbbc1cd6'
      );
      expect(items.at(6).text()).toEqual(
        'block_num : 42'
      );
      expect(items.at(7).text()).toEqual(
        'ref_block_prefix : 3925989575'
      );
    });
  });
});
