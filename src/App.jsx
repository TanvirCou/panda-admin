import Home from "./components/Home/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import NewProduct from "./components/NewProduct/NewProduct";
import NewUser from "./components/NewUser/NewUser";
import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";
import User from "./components/User/User";
import UserList from "./components/UserList/UserList";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
