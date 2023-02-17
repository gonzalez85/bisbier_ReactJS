
import './App.css';
import logo from './images/Logo 2.0 FT.png';
import banner from './images/banner.jpg';

// React Router DOM
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Components
import NavBar from './components/navBar';
import CartWidget from './components/cartWidget';

// Pages
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';

//Context
import { ProductProvider } from './context/productContext';
import { CartProductProvider } from './context/cartProductsContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <CartProductProvider>
            <header>
              <nav>
                <Link to="/">
                  <img src={logo} className="logo" alt="logo" />
                </Link>
                  <NavBar />
                  <CartWidget />
              </nav>
              <img src={banner} className="banner" alt="Imagen de portada" />
            </header>
          </CartProductProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
