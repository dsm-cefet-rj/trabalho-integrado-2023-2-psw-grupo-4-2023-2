import Home from "./pages/Home";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
