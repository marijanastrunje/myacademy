import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import HomePage from "./pages/HomePage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
