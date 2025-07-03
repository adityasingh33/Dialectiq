import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import GrpDebate from './pages/GrpDebate'
import Register from './pages/Register'
import Landing from './pages/Landing'
import AiBotdebate from './pages/AiBotDebate'
import PvtDebate from './pages/PvtDebate'
import Profile from './pages/Profile'
import { AuthProvider } from './context/AuthContext'


const App = () => {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Routes>

            <Route path='/' element={
              <Landing />
            } />

            <Route path='/login' element={
              <Login />
            } />

            <Route path='/register' element={
              <Register />
            } />

            <Route path='/home' element={
              <Home />
            } />

            <Route path='/profile' element={
              <Profile />
            } />

            <Route path='/grpdebate' element={
              <GrpDebate />
            } />

            <Route path='/debateai' element={
              <AiBotdebate />
            } />

            <Route path='/pvtdebate' element={
              <PvtDebate />
            } />

          </Routes>
        </Router>

      </AuthProvider>
    </div>
  )
}

export default App
