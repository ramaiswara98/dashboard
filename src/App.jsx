import "./App.css";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notification from "./components/pages/Notification/Notification";
import Settings from "./components/pages/Settings/Settings";
import Wallet from "./components/pages/Wallet/Wallet";
import Contact from "./components/pages/Contact/Contact";
import History from "./components/pages/History/History";

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/notification" element={<Notification/>} />
          <Route exact path="/history" element={<History/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/wallet" element={<Wallet/>} />
          <Route exact path="/settings" element={<Settings/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
