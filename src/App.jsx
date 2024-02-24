import { BrowserRouter as Router, Routes, Navigate, Route , NavLink} from 'react-router-dom'
import './App.css'
import Overview from "./components/Overview"
import Wind from "./components/Wind"
import ESS from "./components/ESS"
import Mains from "./components/Mains"
import Gensets from "./components/Gensets"
import Solar from "./components/Solar"
import Alerts from "./components/Alerts"
import Biogas from "./components/Biogas"

function App() {

  return (
    <Router>
      <header>

        <NavLink to="/overview" className="nav-link">Overview</NavLink>
        <NavLink to="/solar" className="nav-link">Solar</NavLink>
        <NavLink to="/wind" className="nav-link">Wind</NavLink>
        <NavLink to="/biogas" className="nav-link">Biogas</NavLink>
        <NavLink to="/ess" className="nav-link">ESS</NavLink>
        <NavLink to="/mains" className="nav-link">Mains</NavLink>
        <NavLink to="/gensets" className="nav-link">Gensets</NavLink>
        <NavLink to="/alerts" className="nav-link">Alerts</NavLink>

      </header>

      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/solar" element={<Solar/>} />
        <Route path="/wind" element={<Wind/>} />
        <Route path="/biogas" element={<Biogas />} />
        <Route path="/ess" element={<ESS />} />
        <Route path="/mains" element={<Mains />} />
        <Route path="/gensets" element={<Gensets />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/" element={<Navigate to="/overview" />} />
      </Routes>
    </Router>

  )
}

export default App
