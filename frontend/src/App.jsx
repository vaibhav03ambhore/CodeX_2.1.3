
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowserBid from './pages/BrowserBid'
import Footer from './Components/Footer';
import Login from './pages/Login'
import Register from './pages/Register';
import Role from './pages/Role';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browserbid" element={<BrowserBid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role" element={<Role />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
