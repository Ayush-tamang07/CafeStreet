import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PopularCard from "./components/Card/PopularCard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/card" element={<PopularCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
