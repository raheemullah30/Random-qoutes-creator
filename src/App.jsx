import { useState } from 'react'
import Qoutes from './Components/Qoutes'
import './Qoutes.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
    <Qoutes/>
    </div>
  )
}

export default App
