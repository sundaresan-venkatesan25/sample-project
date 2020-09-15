import React, { useState } from 'react'
import { Trigger } from './style.js';
import List from '../../components/list';

export default function SelectComponent(props) {
  const { options } = props;
  const [ displayList, toggledisplay ] = useState(false);
  function toggledisplayList(e) {
    e.preventDefault();
    toggledisplay(!displayList);
  }

  return (
    <div>
      <Trigger onClick={toggledisplayList}>SITE OPTIONS</Trigger>
        <List options={options}
        displayList={displayList}
        nextLevelOpen={true}/>
    </div>
  )
}
