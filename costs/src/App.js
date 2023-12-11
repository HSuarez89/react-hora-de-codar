import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';

import Container from './components/layout/Container';


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
          <li><Link to='/empresa'>Empresa</Link></li>
          <li><Link to='/novoprojeto'>Novo Projeto</Link></li>
        </ul>
            <Routes>
              <Route element={<Container customClass='min-height'/>}>
                <Route exact path='/' element={<Home />} />
                <Route path='/empresa' element={<Empresa />}/>
                <Route path='/Contato' element={<Contato />}/>
                <Route path='/novoprojeto' element={<NovoProjeto />}/>
              </Route>
            </Routes>
      <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
