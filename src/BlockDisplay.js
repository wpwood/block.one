import React from 'react';

import BlockInfo from './BlockInfo';
import BlockLoading from './BlockLoading';
import BlockPrompt from './BlockPrompt';

const BlockDisplay = ({block}) => {
  if (block.status === 'uninitialized') {
    return (<BlockPrompt />);
  }

  if (block.status === 'loading') {
    return (<BlockLoading />);
  }

  return (<BlockInfo { ...{block} }/>);
};

export default BlockDisplay;
