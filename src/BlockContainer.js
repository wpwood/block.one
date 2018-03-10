import React from 'react';

import Eos from 'eosjs';
import BlockDisplay from './BlockDisplay';
import LoadBlockButton from './LoadBlockButton';

class BlockContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      block: {
        status: 'uninitialized'
      }
    };
  }

  loadBlock() {
    this.setState({
      block: {
        status: 'loading'
      }
    });

    const eos = Eos.Testnet({httpEndpoint: 'http://t1readonly.eos.io'});
    eos.getInfo({})
      .then(result => eos.getBlock(result.head_block_num))
      .then(result => {
        this.blockLoaded(result);
      })
      .catch((error) => {
        this.blockErrored(error);
      });
  }

  blockLoaded(block) {
    this.setState({
      block: {
        status: 'loaded',
        block
      }
    });
  }

  blockErrored(error) {
    this.setState({
      block: {
        status: 'errored',
        error
      }
    });
  }

  render() {
    return (
      <div className='block-container'>
        <BlockDisplay block={this.state.block} />
        <LoadBlockButton onClick={() => { this.loadBlock(); } }/>
      </div>
    );
  }
}

export default BlockContainer;
