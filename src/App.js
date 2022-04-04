import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Nando";

  return (
    <div className="App">
      <h1>Estudando React</h1>
      <p>Olá {name}!</p>
      
      <HelloWorld />
    </div>
  );
}

export default App;
