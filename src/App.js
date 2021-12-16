import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browser from "./pages/Browser";

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browser" element={<Browser />} />
      </Routes>
      <Footer />
    </main>
  );
}
