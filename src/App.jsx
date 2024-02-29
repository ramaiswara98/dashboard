import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainTemplate from './components/templates/MainTemplate/MainTemplate'
import Dashboard from './components/pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard/>
    </>
  )
}

export default App
