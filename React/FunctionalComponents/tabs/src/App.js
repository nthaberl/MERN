import './App.css';
import React, {useState} from 'react';
import TabDisplay from './components/TabDisplay'
import Tabs from './components/Tabs';

function App() {

  const [tabs, setTabs] = useState([
    {
      name: "Tab 1",
      message: "This is Tab 1",
    },
    {
      name: "Tab 2",
      message: "This is Tab 2",
    },
    {
      name: "Tab 3",
      message: "This is Tab 3",
    }
  ]);


  return (
    <div className="App">
      <Tabs tabs = {tabs}/> 
      <TabDisplay tabs = {tabs}/>
    </div>
  );
}

export default App;
