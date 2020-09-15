import React, { useState } from 'react'
import { UIList,Trigger,Container, Child, ChildButton } from './style.js';

export default function List(props) {
  const { options , displayList, selectedOptions , onChange } = props;
  const { entries, level_name } = options;
  const [ dropdownValue, setdropdownValue ] = useState(false);
  const [ nextLevel, setNext ] = useState(false);
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
  function fetchNext(param, level_name) {
    setNext(false);
    if(param.children) {
      fetch(`/${param.children}/${param.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setdropdownValue(result);
            // setError(false);
            setNext(true);
              selectedOptions[level_name] = param.id;
            // call onChange function given by parent
            // onChange(selectedOptions);
            updateSelected(selectedOptions);
          },
          (error) => {
            setdropdownValue(false);
          }
        )
      }
  }

  function updateSelected(selectedOptions) {
    // updateState(selectedOptions);
    // selectedOptions[optionId] = subSelections;
    onChange(selectedOptions);
  }

  function CheckforStates(entry, state, level){
    alert(`Your selected values Level : ${level} ID : ${entry.id} \n STATE : \n site: ${state['site']} \n zone: ${state['zone']} \n building : ${state['building']} ` );
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
              onClick={() => fetchNext(entry, level_name)}
              >
                {entry.name}
                {entry.children ? <Child> > </Child> :
                  <ChildButton onClick={() => CheckforStates(entry, selectedOptions, level_name)} > + </ChildButton>
                }
              </Trigger>
            </li>
            )}
          </ul>
        </UIList> : null }
        { (displayList && nextLevel) ?
          <List
            options={dropdownValue}
            displayList={displayList}
            selectedOptions={selectedOptions}
            onChange={(selectedOptions) => updateSelected(selectedOptions)}
          /> : null
        }
      </Container>
      // </ListHeader>
  )
}
