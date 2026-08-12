import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu"
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Page from './pages/Page';
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="page" element={<Page/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
