
import './App.css';
import logo from './images/Logo 2.0 FT.png';
import banner from './images/banner.jpg';
import NavContainer from './components/navContainer';
import NavBar from './components/navBar';
import CartWidget from './components/cartWidget';
import ArticleContainer from './components/articleContainer';
import ProductCard from './components/productCard';

function App() {
  return (
    <div className="App">
      <header>
        <NavContainer>
          <img src={logo} className="logo" alt="logo" />
            <NavBar 
              title="Cervezas"
              url="#" />
            <CartWidget />
        </NavContainer>
        <img src={banner} className="banner" alt="Imagen de portada"></img>
      </header>
      <main>
        <ArticleContainer>
          <h1>Bienvenidos a la tienda de Bisbier!</h1>
          <ProductCard
            style="Blonde Ale"
            description="La Rubia más refrescante de la familia. Ligera y equilibrada, ideal para los esos días calurosos de verano (y los fríos también ;)"
            price="$ 150"
            image="blonde"/>
          <ProductCard 
            style="Amber Ale"
            description="La más dulce. Destacada por sus maltas complejas sabor caramelo."
            price="$ 150"
            image="amber"/>
          <ProductCard 
            style="India Pale Ale"
            description="La más amarga. Destacada por su delicioso aroma a los mejores lúpulos frutales."
            price="$ 150"
            image="ipa"/>
        </ArticleContainer>
      </main>
    </div>

  );
}

export default App;
