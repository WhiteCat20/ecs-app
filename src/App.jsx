import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainAdmin from "./components/Admin/MainAdmin";
import AbsensiAgenda from "./components/Agenda/AbsensiAgenda";
import BuatAgenda from "./components/Agenda/BuatAgenda";
import ListAgenda from "./components/Agenda/ListAgenda";
import { Form } from "./components/Form";
import Main from "./components/Main";
import AbsensiPiket from "./components/Piket/AbsensiPiket";
import JadwalPiket from "./components/Piket/JadwalPiket";
import "./Style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/jadwal-piket" element={<JadwalPiket />} />
          <Route path="/absensi-piket" element={<AbsensiPiket />} />
          <Route path="/buat-agenda" element={<BuatAgenda />} />
          <Route path="/absensi-agenda" element={<AbsensiAgenda />} />
          <Route path="/list-agenda" element={<ListAgenda />} />
          {/* Admin Pages */}
          <Route path="/admin" element={<MainAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
