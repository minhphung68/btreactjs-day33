import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
