import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Service from './Pages/Services';


function App() {


  return (
    <Router>
      <div>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Service />} />
        
        </Routes>


      </div>
    </Router>
  );
}

export default App;
