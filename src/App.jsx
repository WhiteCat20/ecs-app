import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import Main from "./components/Main";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
