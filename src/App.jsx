import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/popup" element={<Modal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
