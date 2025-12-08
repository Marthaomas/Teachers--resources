import { Routes, Route } from "react-router-dom";
import SessionRecord from "./pages/SessionRecord";
import RecordCard from "./pages/RecordCard";
import Announcements from "./pages/Announcements";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import Mode from "./pages/Mode";
import Modal from "./pages/Modal"
import SecondDash from "./pages/SecondDash";
import Seconddashtwo from "./pages/Seconddashtwo"
import Modulestwo from "./pages/Modulestwo";
import Modaltwo from "./pages/Modaltwo"
import Thirddash from "./pages/Thirddash";
import Modulesthree from "./pages/Modulesthree";
import Modalthree from "./pages/Modalthree"
import Uploadscheme from "./pages/Uploadscheme";
import Uploadschemetwo from "./pages/Uploadschemetwo";
import Uploadschemethree from "./pages/Uploadschemethree";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/record-card" element={<RecordCard />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/session-record" element={<SessionRecord />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/mode" element={<Mode />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/seconddash" element={<SecondDash />} />
      <Route path="/seconddashtwo" element={<Seconddashtwo />} />
      <Route path="/modulestwo" element={<Modulestwo />} />
      <Route path="/modaltwo" element={<Modaltwo />} />
      <Route path="/thirddash" element={<Thirddash />} />
      <Route path="/modulesthree" element={<Modulesthree />} />
      <Route path="/modalthree" element={<Modalthree />} />
      <Route path="/uploadscheme" element={<Uploadscheme />} />
      <Route path="/uploadschemetwo" element={<Uploadschemetwo />} />
      <Route path="/uploadschemethree" element={<Uploadschemethree />} />
    </Routes>
  );
}

export default App;
