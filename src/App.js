import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./pages/cart";
import Contacts from "./pages/contacts";

function App() {
  const currentPage = window.location.pathname.includes("cart")
    ? "cart"
    : "main";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main currentPage={currentPage} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
