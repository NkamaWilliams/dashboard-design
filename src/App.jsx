import { useState } from 'react'
import MainLayout from './components/Layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <p>Wow</p>
    </MainLayout>
  )
}

export default App
