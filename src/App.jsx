import { useState } from 'react'

import Room from './components/Room'
import Chat from './components/Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Room/>
      <Chat/>
    </div>
  )
}

export default App
