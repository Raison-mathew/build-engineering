import { useState } from 'react'
import './App.css'
import { Button } from '@carbon/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Build Engineering</h1>
      <Button>Explain</Button>
    </>
  )
}

export default App
