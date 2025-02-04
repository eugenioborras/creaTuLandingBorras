import { Footer } from "./components/layouts/footer/Footer";
import { NavBar } from "./components/layouts/navbar/NavBar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
