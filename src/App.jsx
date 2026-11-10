import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import "./styles/global.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <Home />

    </div>
  );
}

export default App;
