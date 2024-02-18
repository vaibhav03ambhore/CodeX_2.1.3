
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowserBid from './pages/BrowserBid'
import Footer from './Components/Footer';
import Login from './Components/Login/Login'
import Register from './Components/Login/Register';
import Role from './Components/Login/Role';
import ReadMore from './Components/ReadMore';
import Bidding from './pages/Bidding'
import ProfilePage from './pages/profilePage/Profile';
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
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
