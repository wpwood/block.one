import React from 'react';

import BlockError from './BlockError';
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

  if (block.status === 'errored') {
    return (<BlockError { ...{block} }/>);
  }

  return (<BlockInfo { ...{block} }/>);
};

export default BlockDisplay;
