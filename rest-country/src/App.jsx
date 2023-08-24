import "./App.css";
import Header from "./assets/components/header";
import Home from "./assets/components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./assets/components/detail";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:cca3" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}
