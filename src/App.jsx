import { Footer } from "./components/layouts/footer/Footer";
import { NavBar } from "./components/layouts/navbar/NavBar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
