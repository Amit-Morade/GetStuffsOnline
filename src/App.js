import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetail/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <div style={{marginBottom: "44px"}}>
        <Routes>
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productdetail/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
    
  );
}

export default App;
