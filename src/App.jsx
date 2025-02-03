import NavBar from './components/NavBar'
import Room from './components/Room'
import Chat from './components/Chat'
import './App.css'

function App() {

  return (
    <div className='flex flex-col h-screen'>
      <NavBar/>
      <div className='flex flex-1'>
        <Room/>
        <Chat/>
      </div>
    </div>
  )
}

export default App
