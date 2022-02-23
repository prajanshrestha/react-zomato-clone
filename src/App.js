import "./App.css";
import Index from "./pages/Home/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExploreMenu from "./components/commonComponent/exploreSection/exploreCard/ExploreMenu";
import Header from "./components/commonComponent/header/Header";
import Footer from "./components/commonComponent/footer/Footer";
import Form from "./components/commonComponent/form/Form";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exploreMenu" element={<ExploreMenu />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
