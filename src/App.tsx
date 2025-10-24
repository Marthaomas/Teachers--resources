import { Routes, Route } from "react-router-dom";
import SessionRecord from "./pages/SessionRecord";
import PerformanceRecord from "./pages/PerformanceRecords";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<SessionRecord />} />
        <Route path="/performance" element={<PerformanceRecord />} />
      </Routes>
    
  );
}

export default App;
