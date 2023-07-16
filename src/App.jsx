import { Routes, Router, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./pages/Main.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
