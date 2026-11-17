import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
