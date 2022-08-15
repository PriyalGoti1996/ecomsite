import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Details from './Components/Details';
import Whishlist from './Components/Whishlist';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProductAdd from './Components/ProductAdd';
import PlaceOrder from './Components/PlaceOrder';
import Address from './Components/Address';
import Footer from './Components/Footer';
import Empty from './Components/Empty';
// import { useSelector, useDispatch } from 'react-redux';
// import { decmenetcount, incrementcount } from './Action/CountAction';
// import { productapi } from './Action/productaction';
// import { useEffect } from 'react';
// import axios from 'axios';



function App() {
return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}>Navbar</Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/whishlist' element={<Whishlist/>}></Route>
      <Route path="/placeoder" element={<PlaceOrder/>}></Route>
      <Route path="/address" element={<Address/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/productadd" element={<ProductAdd/>}></Route>
      <Route path='/product/:id' element={<Details/>}></Route>
      <Route path='/empty'  element={<Empty/>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
