import "./App.css";
import Index from "./pages/Home/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExploreMenu from "./components/commonComponent/exploreSection/exploreCard/ExploreMenu";
import Header from "./components/commonComponent/header/Header";
import Footer from "./components/commonComponent/footer/Footer";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exploreMenu" element={<ExploreMenu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
