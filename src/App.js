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
        <Route path={process.env.PUBLIC_URL + '/'} element={<About/>}/>
        <Route path={process.env.PUBLIC_URL + '/academics'} element={<Academics/>}/>
        <Route path={process.env.PUBLIC_URL + '/portfolio'} element={<Portfolio/>}/>
        <Route path={process.env.PUBLIC_URL + '/utility'} element={<Utility/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
