import React from 'react'
// import MarsRover from './FetchedData/MarsRover'
import LandingPage from './Pages/LandingPage'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
   </Routes>
    </>
  )
}

export default App
