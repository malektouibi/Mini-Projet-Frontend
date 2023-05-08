import {
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignUP from './Pages/SignUP';
import LOGIN from './Pages/Login';
import Register1 from './Pages/Register1';
import Register2 from './Pages/Register2';
import Register3 from './Pages/Register3';
import Register4 from './Pages/RRegister4';
import RRegister1 from './Pages/RRegister1';
import RRegister2 from './Pages/RRegister2';
import RRegister3 from './Pages/RRegister3';
import RRegister4 from './Pages/RRegister4';
import Feed from './Pages/Feed';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LOGIN />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/R1" element={<Register1 />} />
        <Route path="/R2" element={<Register2 />} />
        <Route path="/R3" element={<Register3 />} />
        <Route path="/R4" element={<Register4 />} />
        <Route path="/RR1" element={<RRegister1 />} />
        <Route path="/RR2" element={<RRegister2 />} />
        <Route path="/RR3" element={<RRegister3 />} />
        <Route path="/RR4" element={<RRegister4 />} />
        <Route path="/F" element={<Feed />} />
    </Routes>
    </div>
  );
}

export default App;
