import React from 'react';

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

    setTimeout(() => { this.blockLoaded(); }, 3000);
  }

  blockLoaded() {
    this.setState({
      block: {
        status: 'loaded'
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
