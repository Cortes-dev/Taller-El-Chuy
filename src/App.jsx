import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Carros from './views/Carros';
import Trocas from './views/Trocas';
import Navbar from './layouts/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carros" element={<Carros />} />
        <Route path="/Trocas" element={<Trocas />} />
      </Routes>
    </Router>
  );
}

export default App;
