import "./App.css";
import Index from "./pages/Home/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExploreMenu from "./components/commonComponent/exploreSection/exploreCard/ExploreMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/exploreMenu" element={<ExploreMenu />} />
      </Routes>      
    </Router>
  );
}

export default App;
