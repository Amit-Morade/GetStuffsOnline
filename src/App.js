import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetail/ProductDetails";
import CartConfirmation from "./components/CartConfirmation/CartConfirmation";
import Login from "./components/LoginButton/LoginButton";
import { UserContext } from "../src/contexts/UserContext"
import { supabase } from "../src/utils/supabase"
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";

function App() {
  const [ session, setSession ] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
    })

    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
    })

    return () => subscription.unsubscribe()
}, [])
    
  return (
    <div>
      <UserContext.Provider value={{session: session}}>
        <Header />  
        <div style={{marginBottom: "44px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/productdetail/:id" element={<ProductDetails />} />
            <Route path="/cartconfirmation/:id" element={<CartConfirmation />} />
          </Routes>
        </div>
      </UserContext.Provider>
      
      <Footer />
    </div>
    
  );
}

export default App;
