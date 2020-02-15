import React from 'react';

export const StatRoller = (props) => {
    const {rollStat} = props
    return (
      <div>
          <button onClick={rollStat}> Roll One Level </button>
      </div>
    );
}

export default StatRoller;
