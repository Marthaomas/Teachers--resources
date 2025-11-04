import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SessionRecord from "./pages/SessionRecord";
import RecordCard from "./pages/RecordCard";
import Announcements from "./pages/Announcements";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<SessionRecord />} />
        <Route path="/record-card" element={<RecordCard />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      

    
  );
}

export default App;
