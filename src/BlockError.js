import React from 'react';

const BlockError = ({block}) => {
  return (
    <h2 className='error'>
      { `Unable to load the block data: ${block.error}` }
    </h2>
  );
};

export default BlockError;
