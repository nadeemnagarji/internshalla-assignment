import React from 'react';

export default function Select({options}) {
    return(
      <select className=" p-1 text-fontlightgrey">
       {options && options.map(option=>
            <option value={option}>{option}</option>
        )}
      </select>
    )
};
