import './App.css'
import { Button } from '@carbon/react'
import AppHeader from './components/AppHeader'
import InfoTable from './components/InfoTable'

const scheduleHeaders = [
  { key: "schedule", header: "Schedule" },
  { key: "plan", header: "Plan" },
  { key: "sprint1", header: "Sprint1" },
  { key: "sprint2", header: "Sprint2" },
  { key: "sprint3", header: "Sprint3" },
  { key: "frt", header: "Final Regression Test" },
  { key: "gm", header: "GM" },
  { key: "ega", header: "eGA" },
];

const scheduleRows = [
  {
    id: "905",
    schedule: "905.24",
    plan: "WAS9.0.5.24",
    sprint1: "12/07/25",
    sprint2: "13/07/25",
    sprint3: "14/07/25",
    frt: "12/07/25",
    gm: "14/07/25",
    ega: "20/07/25",
  },
  {
    id: "855",
    schedule: "855.28",
    plan: "WAS855.28",
    sprint1: "12/07/25",
    sprint2: "13/07/25",
    sprint3: "14/07/25",
    frt: "12/07/25",
    gm: "14/07/25",
    ega: "30/07/25",
  },
];

function App() {
  

  return (
    <>
      <AppHeader></AppHeader>
      
      <div style={{padding: '2rem'}}>
        <InfoTable headers={scheduleHeaders} rows={scheduleRows}></InfoTable>
      </div> 
    </>
  )
}

export default App
