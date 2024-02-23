import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import LayoutPage from './pages/Layout/LayoutPage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import HomePage from './pages/HomePage'
import { auth } from './firebase/index.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {

  // check if the user is logged in using the firebase not the zustand localstorage
  const [authUser] = useAuthState(auth)

  return (
    <>
      <LayoutPage>
        <Routes>
          <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
          <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
          <Route path='/:username' element={<ProfilePage />} />
        </Routes>
      </LayoutPage>
    </>
  )
}

export default App
