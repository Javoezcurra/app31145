import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        
      </header>
    </div>
  );
}

export default App;
