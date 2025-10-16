
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/Pages/Home/HomePage';
import Navbar from './components/Common/Navbar';
import ProductsPage from './components/Pages/Products/ProductsPage';
import ProductDetailsPage from './components/Pages/ProductDetails/ProductDetailsPage';
import AboutPage from './components/Pages/About/AboutPage';
import ContactPage from './components/Pages/Contact/ContactPage';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from './components/Pages/Login/LoginPage';
import RegistrationPage from './components/Pages/Registration/RegistrationPage';

function App() {
  return (
    <>
      
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/products/:id" element={<ProductDetailsPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegistrationPage/>}/>
          </Routes>
        </BrowserRouter>
     
      
    </>
  );
}

export default App;
