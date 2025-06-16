import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import GrpDebate from './pages/GrpDebate'
import Register from './pages/register'
import Landing from './pages/landing'
import Aibotdebate from './pages/aibotdebate'
import PvtDebate from './pages/PvtDebate'


const App = () => {
  return (
    <div>
        <Router>
          <Routes>

            <Route path='/land' element={
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
