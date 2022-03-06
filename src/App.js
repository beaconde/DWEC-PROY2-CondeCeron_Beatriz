import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from "./components/About"
import Academics from "./components/Academics"
import Portfolio from "./components/Portfolio"
import Utility from "./components/Utility"
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/utility" element={<Utility/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
