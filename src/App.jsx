import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AbsensiAgenda from "./components/Agenda/AbsensiAgenda";
import BuatAgenda from "./components/Agenda/BuatAgenda";
import ListAgenda from "./components/Agenda/ListAgenda";
import Main from "./components/Main";
import AbsensiPiket from "./components/Piket/AbsensiPiket";
import JadwalPiket from "./components/Piket/JadwalPiket";
import "./Style.css";
import FullPageBackground from "./components/Template/FullPageBackground";
import IndexAdmin from "./components/Admin/Index";
import Agenda from "./components/Admin/Agenda/Agenda";
import EditAgenda from "./components/Admin/Agenda/EditAgenda";
import Piket from "./components/Admin/Piket/Piket";
import Login from "./components/Auth/Login";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";
// import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // <AuthProvider>
    <Router>
      <FullPageBackground backgroundColor="#272727">
        <div className="App">
          <Routes>
            <Route path="login" element={<Login />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/" element={<Main />} />
            <Route path="/jadwal-piket" element={<JadwalPiket />} />
            <Route path="/absensi-piket" element={<AbsensiPiket />} />
            <Route path="/buat-agenda" element={<BuatAgenda />} />
            <Route path="/absensi-agenda" element={<AbsensiAgenda />} />
            <Route path="/list-agenda" element={<ListAgenda />} />
            <Route path="/admin">
              <Route index element={<IndexAdmin />} />
              <Route path="agenda" element={<Agenda />} />
              <Route path="agenda/edit/:id" element={<EditAgenda />} />
              <Route path="piket" element={<Piket />} />
            </Route>
            {/* </Route> */}
          </Routes>
        </div>
      </FullPageBackground>
    </Router>
    // </AuthProvider>
  );
}

export default App;
