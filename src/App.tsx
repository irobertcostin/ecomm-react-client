import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home-components/Home";
import Footer from "./components/home-components/Footer";
import ScrollToTop from "./components/home-components/ScrollToTop";
import Navbar from "./components/navbar-components/Navbar";
import Wishlist from "./components/user-components/Wishlist";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
