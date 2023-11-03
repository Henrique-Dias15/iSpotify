import { useState } from 'react'
import './App.css'
import Desktop1 from './components/Desktop1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Desktop1 />
      </div>
  )
}

export default App
