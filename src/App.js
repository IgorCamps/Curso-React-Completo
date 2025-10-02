import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      {/* <HelloWorld/> */}
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Igor" />
      <SayMyName nome="Pedro" />
      <SayMyName nome={nome} />
      <Pessoa nome="Igor" idade="23" profissao="Programador" foto="https://placehold.co/150x150"/>
      <List />
    </div>
  );
}

export default App;
