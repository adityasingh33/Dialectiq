import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import GrpDebate from './pages/GrpDebate' 
import Register from './pages/register'
import Landing from './pages/Landing'
import Aibotdebate from './pages/AiBotDebate'
import PvtDebate from './pages/PvtDebate'


const App = () => {
  return (
    <div>
        <Router>
          <Routes>

            <Route path='/' element={
              <Landing/>
            }/>
            
            <Route path='/login' element={
              <Login/>
            }/>

            <Route path='/register' element={
              <Register/>
            }/>

            <Route path='/home' element={
              <Home/>
            }/>

            <Route path='/grpdebate' element={
              <GrpDebate/>
            }/>

            <Route path='/debateai' element={
              <Aibotdebate/>
            }/>

            <Route path='/pvtdebate' element={
              <PvtDebate/>
            }/>

          </Routes>
        </Router>
    </div>
  )
}

export default App
