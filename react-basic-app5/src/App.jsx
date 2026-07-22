import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import StudyPage from './pages/StudyPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="study" element={<StudyPage />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="settings" element={<SettingsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

