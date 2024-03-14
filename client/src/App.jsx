import React from 'react'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
   </Routes>
    </>
  )
}

export default App
