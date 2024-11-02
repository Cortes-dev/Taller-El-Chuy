import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Carros from './views/Carros';
import Trocas from './views/Trocas';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carros" element={<Carros />} />
        <Route path="/Trocas" element={<Trocas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
