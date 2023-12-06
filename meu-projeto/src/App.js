import './App.css';
import './components/HelloWorld.js';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase.js';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';
import PessoaEstruturado from './components/PessoaEstruturado.js';
import List from './components/List.js'
import Evento from './components/Evento.js';
import Form from './components/Form.js';
import EventoProps from './components/eventosProps/EventoProps.js';
import Condicional from './components/Condicional.js';
import OutraLista from './components/OutraLista.js';
import { useState } from 'react';
import SeuNome from './components/SeuNome.js';
import Saudacao from './components/Saudacao.js';

function App() {
  const name = 'Henrique'
  const newName = name.toUpperCase()
  const nome = "José"
  const [nomes, setNomes] = useState()
  function sum(a, b){
    return a + b
  }
  const meusItens = ['React', 'Vue', 'Angular']
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
          idade="66"
          profissao="Dentista"
          foto="https://via.placeholder.com/150"
        />
        <PessoaEstruturado
          nome="Marcelo"
          idade='24'
          profissao="Piloto da Latam"
          foto="https://via.placeholder.com/150"
        />
        <List />
        <h1>Eventos</h1>
        <Evento />
        <Form />
        <h1>Eventos por props</h1>
        <EventoProps/>
        <h1>Renderização Condicional</h1>
        <Condicional/>
        <h1>Renderização de listas</h1>
        <OutraLista itens={meusItens}/>
        <OutraLista itens={''}/>
        <h1>State Lift</h1>
        <p>A variável do useState está no App.js e não no componente.</p>
        <SeuNome setNomes={setNomes}/>
        <Saudacao nomes={nomes} />
    </div>
  );
}

export default App;
