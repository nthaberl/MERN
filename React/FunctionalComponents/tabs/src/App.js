import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';

function App() {
//immutable state of tabs
  const [tabs, setTabs] = useState([
    {
      name: "Tab 1",
      message: "//welcome to tab 1//",
    },
    {
      name: "Tab 2",
      message: "~*~you've ventured off to tab 2~*~",
    },
    {
      name: "Tab 3",
      message: "<<and descended even further to tab 3>>",
    }
  ]);


  return (
    <div className="App">
      <Tabs tabs = {tabs}/> 
      {/* ^^ sending tabs prop to Tabs component */}
    </div>
  );
}

export default App;
