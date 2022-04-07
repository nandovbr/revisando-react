import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'; // revisando propos
import Pessoa from './components/Pessoa'; // revisando propos com destructuring
import List from './components/List'; // revisando fragments <></>
import Evento from './components/Evento'; // revisando eventos
import Form from './components/Form'; // aicionando formulario de submit

function App() {

  return (
    <div className="App">  
      <HelloWorld />
      <SayMyName nome="Fernando" />
      <SayMyName nome="Luiz" />
      <Pessoa nome="Luiz Fernando" idade="30 anos" profissao="Programador" />
      <List />
      <Evento />
      <Form />
    </div>
  );
}

export default App;
