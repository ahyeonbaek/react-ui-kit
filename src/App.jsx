import { useState } from 'react'
import Tab from './components/Tab/Tab';
import TabContent from './components/Tab/TabContent';
import TabMenu from './components/Tab/TabMenu';
import Accordion from './components/Accordion/Accordion';


const DEFAULT_TAB_DATA = [
  {title: "TabMenu-A", 
    content: (
      <div>
        <h2>TabContent-A</h2>
        <h3>This is TabContent-A Description</h3>
      </div>
    ),
  },
  {
    title: "TabMenu-B",
    content: (
      <div>
        <h2>TabContent-B</h2>
        <h3>This is TabContent-B Description</h3>
      </div>
    ),
  },
]

function App() {

  return (
    <>
      {/* <Tab data={DEFAULT_TAB_DATA}/> */}
      <Accordion />
    </>
  )
}

export default App
