import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import LayoutPage from './pages/Layout/LayoutPage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import HomePage from './pages/HomePage'
import useAuthStore from './store/authStore.js'

function App() {

  const authUser = useAuthStore(state => state.user)

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
