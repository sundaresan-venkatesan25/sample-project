import React from 'react';
import SelectComponent from './components/selectComponent';
import './App.css';
import Options from './constants/site-values';

class App extends React.Component {

  render() {
     return (
       <div>
         <h1>Click here to see options</h1>
         <SelectComponent
           options={Options}
         />
       </div>
     )
  }
}

export default App;
