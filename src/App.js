import Home from "./pages/Home";
import PreLeitura from "./pages/PreLeitura";
import ReadingBook from "./pages/ReadingBook";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          <Route path="/PreLeitura" element={<PreLeitura />} />
          <Route path="/lendolivro" element={<ReadingBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
