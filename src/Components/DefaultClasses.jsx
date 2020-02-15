import React from 'react';
import classes from '../classes'

export const DefaultClasses = (props) => {
    const {setDefaultStats} = props
    return (
      <div>
          {classes && Object.keys(classes).map((type, index) => {
              return (
                    <button key={type + index} style={{'marginRight': '5px', 'marginBottom': '5px'}} onClick={() => setDefaultStats(type)}> {classes[type].classTitle} </button>
              )
          })}
      </div>
    );
}

export default DefaultClasses;
