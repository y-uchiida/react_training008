import { useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import TimeLine from './components/TimeLine/TimeLine'
import Widget from './components/Widget/Widget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideBar />
      <TimeLine />
      <Widget />
    </div>
  )
}

export default App
