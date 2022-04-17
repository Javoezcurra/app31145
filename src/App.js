
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import { Itemlist } from './components/Itemlist';
import './App.css';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">

     


        <ItemListContainer
        
        bienvenida={"Bienvenid@s a tu biblioteca amiga!!"}
        bienvenida2={"La biblioteca esta repleto de misterios!"}
          
        />



          <Navbar />
      
        

        <img src="https://cdn-icons-png.flaticon.com/512/235/235359.png" className="App-logo" alt="logo" />




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

        
        <div className="item-container">


<ItemDetail 

className="items"
name={"El señor de los anillos: trilogía"}
description={"La trilogia imperdible para conocer otro fascinante mundo"}
precio={"$5500"}
img={"https://images.cdn3.buscalibre.com/fit-in/360x360/5c/e4/5ce4d32cd480e67925a3882a5f1f4243.jpg"}/>

<ItemCount />  


<ItemDetail 
className="items"
name={"Todo lo que cabe en los bolsillos"}
description={"Eva weber nos trae esta hermosa novela sobre la autosuperación en un contexto de extrema violencia"}
precio={"$1300"}
img={"https://imagessl8.casadellibro.com/a/l/t5/18/9788467007718.jpg"}/>

<ItemCount />  

<ItemDetail 
className="items"
name={"Las flores del mal"}
description={"Poesias que nos muestran lo mas cruel de manera hermosa"}
precio={"$450"}
img={"https://images.cdn3.buscalibre.com/fit-in/360x360/3b/4f/3b4f533437b9d0bd72df6bb8fd7bda20.jpg"}/>

</div>


 <ItemCount />  

 <ItemDetailContainer />
        

      </header>
    </div>
  );
}

export default App;
