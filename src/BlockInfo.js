import React from 'react';

const BlockInfo = ({block}) => {
  return (
    <div>
      <h2>Here is the block</h2>
      <ul>
        { keyValueList(block.block) }
      </ul>
    </div>
  );
};

const keyValueList = (block_info) => (
  Object.keys(block_info)
    // Filter out non-string attributes
    .filter(key => !['cycles', 'producer_changes'].includes(key))
    .map(key => <li key={key}><strong>{key}</strong> : {block_info[key]}</li>)
);

export default BlockInfo;
