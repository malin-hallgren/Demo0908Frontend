import LoginPage from './pages/Login'
import Movies from './pages/Movies'
import {Routes, Route} from 'react-router'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/movies' element={<ProtectedRoute > <Movies /> </ProtectedRoute>}/>
    </Routes>
  )
}

export default App
