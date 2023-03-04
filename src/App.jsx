import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import Main from "./components/Main";
import "./Style.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
