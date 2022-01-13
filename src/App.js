import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import how from "./pages/how";
import Header from "./components/header";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <div className="App">
      <div className="top-navbar" id="top-navbar">
        <Box sx={{ textAlign: "right", m: 1 }}>
          <Typography variant="subtitle1" textAlign="right">
            <span>EN </span> | <span>DE</span>
          </Typography>
        </Box>
      </div>
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
      <Header />
    </div>
  );
}
