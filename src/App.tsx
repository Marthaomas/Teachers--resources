import { Routes, Route } from "react-router-dom";
import SessionRecord from "./pages/SessionRecord";
import RecordCard from "./pages/RecordCard";
import Announcements from "./pages/Announcements";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/record-card" element={<RecordCard />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/session-record" element={<SessionRecord />} />
    </Routes>
  );
}

export default App;
