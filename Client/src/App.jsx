import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Podcasts from './Components/Podcasts/Podcasts'
import Events from './Components/Events/Events'
import Blog from './Components/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Podcasts/>
    
  )
}

export default App
