import React from 'react'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import MarsRover from './FetchedData/MarsRover'
import APOD from './FetchedData/APOD'
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/marsrover' element={<MarsRover/>}></Route>
    <Route path='/apod' element={<APOD/>}></Route>
   </Routes>
    </>
  )
}

export default App
