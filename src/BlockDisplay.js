import React from 'react';

import BlockInfo from './BlockInfo';
import BlockLoading from './BlockLoading';

const BlockDisplay = ({block}) => {
  if (block.status === 'uninitialized') {
    return (<h2>Press the button to load the block</h2>);
  }

  if (block.status === 'loading') {
    return (<BlockLoading />);
  }

  return (<BlockInfo { ...{block} }/>);
};

export default BlockDisplay;
