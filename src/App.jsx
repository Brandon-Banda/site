import "./styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Water from "./pages/Water";
import Nav from "./components/Nav";
import Gear from "./pages/Gear";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/water" element={<Water />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/gear" element={<Gear />} />
      </Routes>
    </Router>
  );
}
export default App;
