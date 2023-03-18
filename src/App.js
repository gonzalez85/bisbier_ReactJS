
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
import Error from './pages/Error';
import CartProducts from './pages/cartProducts';

//Context
import { ProductsProvider } from './context/productsContext';
import { CartProductsProvider } from './context/cartProductsContext';
import { CountersProvider } from './context/counterContext';

function App() {
  return (
    <Router>
      <ProductsProvider>
        <CartProductsProvider>
          <CountersProvider>
            <div className="App">
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
              <article>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/category/:id" element={<Category />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<CartProducts />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </article>
            </div>
          </CountersProvider>
        </CartProductsProvider>
      </ProductsProvider>
    </Router>
  );
};

export default App;
