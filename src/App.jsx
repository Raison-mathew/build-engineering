import { useState } from 'react'
import './App.css'
import { Button } from '@carbon/react'
import AppHeader from './components/AppHeader'
import InfoTable from './components/InfoTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Welcome to Build Engineering</h1>
      <Button>Explain</Button> */}
      <AppHeader></AppHeader>
      <InfoTable></InfoTable>
    </>
  )
}

export default App
