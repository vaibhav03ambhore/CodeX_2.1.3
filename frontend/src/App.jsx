import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowserBid from './pages/BrowserBid'
import Footer from './Components/Footer';
import ULogin from './Components/Login/ULogin'
import URegister from './Components/Login/URegister';
import ORegister from './Components/Login/ORegister';
import OLogin from './Components/Login/OLogin';
import Role from './Components/Login/Role';
import ReadMore from './Components/ReadMore';
import Bidding from './pages/Bidding'
import BidObject from './Components/BidObject';
import BidForm from './Components/BidForm';
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<Role />} />
        <Route path="/ulogin" element={<ULogin />} />
        <Route path="/uregister" element={<URegister />} />
        <Route path="/ologin" element={<OLogin />} />
        <Route path="/oregister" element={<ORegister />} />
        <Route path="/readmore" element={<ReadMore />} />
        <Route path="/browserbid" element={<BrowserBid />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/bidobject" element={<BidObject />} />
        <Route path="/bidform" element={<BidForm/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
