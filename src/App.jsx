import './App.css'
import { Button } from '@carbon/react'
import AppHeader from './components/AppHeader'
import InfoTable from './components/InfoTable'

const scheduleHeaders = [
  { key: "schedule", header: "Schedule" },
  { key: "plan", header: "Plan" },
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

const buildStatusHeaders = [
  { key: "schedule", header: "Schedule" },
  { key: "last", header: "Last Committed" },
  { key: "ready", header: "Ready to Commit" },
  { key: "bvt", header: "BVT Testing" },
  { key: "manual", header: "Manual" },
  { key: "auto", header: "Auto" },
];

const buildStatusRows = [
  {
    id: "905status",
    schedule: "905.24",
    last: "f5242521.01",
    ready: "f5242521.02",
    bvt: "f5242521.03",
    manual: "commit-905", // custom cell renderer → Button
    auto: "OFF", // Tag renderer
  },
  {
    id: "855status",
    schedule: "855.28",
    last: "f5242521.01",
    ready: "f5242521.02",
    bvt: "f5242521.03",
    manual: "commit-855",
    auto: "ON",
  },
];

function App() {
  

  return (
    <>
      {/* <h1>Welcome to Build Engineering</h1>
      <Button>Explain</Button> */}
      <AppHeader></AppHeader>
      <InfoTable headers={scheduleHeaders} rows={scheduleRows}></InfoTable>
      <InfoTable headers={buildStatusHeaders} rows={buildStatusRows}></InfoTable>
    </>
  )
}

export default App
