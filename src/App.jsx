import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ket-qua" element={<Result />} />
    </Routes>
  );
}