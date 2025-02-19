
import { useEffect } from 'react'
import './App.scss'

import Chrono from "./components/Chrono"

function App() {

  useEffect(()=>{
    document.title = "Chromo"
  },[])

  return (
    <>
      <Chrono />
    </>
  )
}

export default App
