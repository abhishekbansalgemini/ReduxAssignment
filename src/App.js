import "./App.css";
import AddProduct from "./Components/AddProduct/AddProduct";
import ProductNavbar from "./Components/Navbar/Navbar";
import Show_Products from "./Components/Show_Products/Show_Products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";
import Error from "./Components/Error/Error";

function App() {
  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<><ProductNavbar></ProductNavbar> <Show_Products></Show_Products></>}></Route>
          <Route path="/addproduct" element = {<AddProduct></AddProduct>}></Route>
          <Route path="/updateproduct/:id" element = {<UpdateProduct></UpdateProduct>}></Route>
          <Route path="*" element = {<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
