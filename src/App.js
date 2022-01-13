import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import how from "./pages/how";

export default function App() {
  return (
    <div className="App">
      <h1>Hello from navbar mui</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={null} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/how" component={how} />
        </Routes>
      </Router>
    </div>
  );
}
