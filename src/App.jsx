import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/App";
import Panel from "./pages/Panel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Panel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
