import './App.css'
import { Button } from '@carbon/react'
import AppHeader from './components/AppHeader'
import InfoTable from './components/InfoTable'
import AutoTargetTable from './components/AutoTarget';
import BuildStatusTable from './components/BuildStatusTable';
import BuildEngineeringDashboard from './components/BuildEngineeringDashboard';

const scheduleHeaders = [
  { key: "schedule", header: "Schedule" },
  { key: "plan", header: "Plan" },
  { key: "initialsetup", header: "Initial Setup" },
  { key: "sprint1", header: "Sprint 1" },
  { key: "sprint2", header: "Sprint 2" },
  { key: "sprint3", header: "Sprint 3" },
  { key: "frt", header: "Final Regression Test" },
  { key: "gm", header: "GM" },
  { key: "ega", header: "eGA" },
];

const scheduleRows = [
  {
    id: "905",
    schedule: "905.24",
    plan: "WAS9.0.5.24",
    initialsetup: "10/06/25",
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
    initialsetup: "10/06/25",
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
      <BuildEngineeringDashboard></BuildEngineeringDashboard>
      
      <div style={{padding: '2rem'}}>
        <InfoTable headers={scheduleHeaders} rows={scheduleRows}></InfoTable>
         {/* <InfoTable headers={buildStatusHeaders} rows={buildStatusRows}></InfoTable> */}
        <div style={{display: "inline-flex", width: "100%"}}>
          <BuildStatusTable></BuildStatusTable>
          <AutoTargetTable></AutoTargetTable>
        </div>
        
      </div> 
    </>
  )
}

export default App
