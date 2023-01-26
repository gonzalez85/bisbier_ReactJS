
import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';
import ProductCard from "./components/ProductCard.jsx";
import logo from './images/Logo 2.0 FT.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const onClick = () => {
    setNumClicks(numClicks + 1);
  }
  const reboot = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className= 'contLogo'>
        <img 
        className='logo'
        src={logo}
        alt='Logo de Bisbier' />
      </div>
      <div className='contPrincipal'>
        <h1>Bienvenido a nuestra Tienda online!</h1>
        <ProductCard
          style="Blonde Ale"
          description="La Rubia más refrescante de la familia. Ligera y equilibrada, ideal para los esos días calurosos de verano (y los fríos también ;)"
          price="$ 150"
          image="blonde"/>
        <Counter 
        numClicks={numClicks} />
        <Button 
          text='Clic'
          clickButton={true}
          onClick={onClick} />
        <Button 
          text='Reiniciar'
          clickButton={false}
          onClick={reboot} />
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
      </div>
    </div>
  );
}

export default App;
