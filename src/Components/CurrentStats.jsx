import React from 'react';

export const CurrentStats = (props) => {
    const {stats} = props
    return (
      <div>
        Current Stats:
        {stats && Object.keys(stats).map((stat, index) => {
            if (!stat.includes('class')) {
                return (
                    <div key={stat + index} >
                    <span> {stat}: </span>
                    <span> {stats[stat]} </span>
                    </div>
                )
            } else {
                return null
            }
    })}
      </div>
    );
}

export default CurrentStats;
