import { BrowserRouter as Router, Route, NavLink, Routes, Navigate } from 'react-router-dom';
import Overview from './components/Overview';
import Solar from './components/Solar';
import Wind from './components/Wind';
import Biogas from './components/Biogas';
import ESS from './components/ESS';
import Mains from './components/Mains';
import Gensets from './components/Gensets';
import Alerts from './components/Alerts';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/overview" className="nav-link">Overview</NavLink></li>
            <li><NavLink to="/solar" className="nav-link">Solar</NavLink></li>
            <li><NavLink to="/wind" className="nav-link">Wind</NavLink></li>
            <li><NavLink to="/biogas" className="nav-link">Biogas</NavLink></li>
            <li><NavLink to="/ess" className="nav-link">ESS</NavLink></li>
            <li><NavLink to="/mains" className="nav-link">Mains</NavLink></li>
            <li><NavLink to="/gensets" className="nav-link">Gensets</NavLink></li>
            <li><NavLink to="/alerts" className="nav-link">Alerts</NavLink></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/wind" element={<Wind />} />
          <Route path="/biogas" element={<Biogas />} />
          <Route path="/ess" element={<ESS />} />
          <Route path="/mains" element={<Mains />} />
          <Route path="/gensets" element={<Gensets />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/" element={<Navigate to="/overview" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
