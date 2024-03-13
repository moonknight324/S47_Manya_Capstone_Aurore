import React from 'react'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/login' element={<Login/>}></Route>

   </Routes>
    </>
  )
}

export default App
