import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home-components/Home";
import Footer from "./components/home-components/Footer";
import ScrollToTop from "./components/home-components/ScrollToTop";
import Navbar from "./components/home-components/Navbar";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
