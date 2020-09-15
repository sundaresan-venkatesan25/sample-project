import React, { useState } from 'react'
import { UIList,Trigger,Container, Child } from './style.js';

export default function List(props) {
  const { options , displayList, nextLevelOpen} = props;
  const { entries} = options;
  const [ dropdownValue, setdropdownValue ] = useState(false);
  const [ next, setNext ] = useState(false);

  // To handle errors:
  // const [ showError, setError ] = useState(false);

  // To handle clicks:
  // const [selectedEntry, setEntry] = useState(false);
  // function handleLeave() {
  //   if (!selectedEntry) {
  //     //setdropdownValue(false);
  //   }
  // }
  // function handleClick(param) {
  //   setEntry(param);
  // }
  function fetchNext(param) {
    setNext(false);
    fetch(`/${param.children}/${param.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setdropdownValue(result);
          // setError(false);
          // setTimeout(function(){setNext(true)},10);
          setNext(true);
        },
        (error) => {
          setdropdownValue(false);
        }
      )
  }
  return (
      // <ListHeader>{ showError ? <div> An error occured </div> : <div> Select a {level_name} </div> }
      <Container>
        { displayList ?
        <UIList>
          <ul>
          { entries.map((entry) =>
            <li key={entry.id}>
              <Trigger //onMouseEnter={() => fetchNext(entry)}
              // onMouseLeave={() => handleLeave(false)}
              onClick={() => fetchNext(entry)}
              >
                {entry.name}
                {entry.children ? <Child> > </Child> : null}
              </Trigger>
            </li>
            )}
          </ul>
        </UIList> : null }

        { (displayList && dropdownValue && nextLevelOpen && next) ?
        <List
          options={dropdownValue}
          displayList={displayList}
          nextLevelOpen={true}
        /> : null
        }
      </Container>
      // </ListHeader>
  )
}
