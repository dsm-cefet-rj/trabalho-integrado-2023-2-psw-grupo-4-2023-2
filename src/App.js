import Home from "./pages/Home";
import Leitor from "./Leitor"
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
          <Route path="/lendolivro" element={<Leitor/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
