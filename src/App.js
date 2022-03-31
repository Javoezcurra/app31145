import logo from './logo.svg';
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { Itemlist } from './components/Itemlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

     


        <ItemListContainer
        
        bienvenida={"Bienvenid@s a tu biblioteca amiga!!"}
        bienvenida2={"La biblioteca esta repleto de misterios!"}
          
        />


        <Navbar /> 

        <img src={logo} className="App-logo" alt="logo" />




        <p>
          Bienvenido a la primera entrega de React.
        </p>
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=_6dbcQaOddk"
          target="_blank"
          rel="noopener noreferrer"
        >
          En este link vas a encontrar una canción muy importante.
        
        </a>

        <Itemlist />

        
        <ItemCount />  
        

      </header>
    </div>
  );
}

export default App;
