import About from './Components/About';
import BrowserBid from './Components/BrowserBid'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/browserBid" element={<BrowserBid />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
