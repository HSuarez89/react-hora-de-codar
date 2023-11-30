import './App.css';
import './components/HelloWorld.js';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase.js';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';
import PessoaEstruturado from './components/PessoaEstruturado.js';

function App() {
  const name = 'Henrique'
  const newName = name.toUpperCase()
  const nome = "José"
  function sum(a, b){
    return a + b
  }
  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
        <h1>Olá React!</h1>
        <p>Meu primeiro App!</p>
        <p>Olá, {newName}!</p>
        <p>Soma: {sum(1, 2)}</p>
        <img src={url} alt= 'Minha imagem'/>
        <Frase />
        <HelloWorld />
        <h1>Props</h1>
        <SayMyName nome="Henrique" />
        <SayMyName nome='Hugo' />
        <SayMyName nome={nome} />
        <Pessoa nome="Henrique"
          idade="34"
          profissao="Programador"
          foto="https://via.placeholder.com/150"
        />
        <PessoaEstruturado
          nome="Yete Suarez Siqueira"
          idade="67"
          profissao="Dentista"
          foto="https://via.placeholder.com/150"
        />
    </div>
  );
}

export default App;
