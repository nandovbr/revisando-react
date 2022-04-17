import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'; // revisando propos
import Pessoa from './components/Pessoa'; // revisando propos com destructuring
import List from './components/List'; // revisando fragments <></>
import Evento from './components/Evento'; // revisando eventos
import Form from './components/Form'; // aicionando formulario de submit
import Condicional from './components/Condicional'; // renderização condicional (if)

function App() {

  return (
    <div className="App">
      Relembrando React
      <HelloWorld />
      <SayMyName nome="Fernando" />
      <SayMyName nome="Luiz" />
      <Pessoa nome="Luiz Fernando" idade="30 anos" profissao="Programador" />
      <List />
      <Evento />
      <Form />
      <h1>Renderização condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
