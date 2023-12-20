import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Projetos from './components/pages/Projetos';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Projeto from './components/pages/Projeto';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
            <Routes>
              <Route element={<Container customClass='min-height'/>}>
                <Route exact path='/' element={<Home />} />
                <Route path='/empresa' element={<Empresa />}/>
                <Route path='/Contato' element={<Contato />}/>
                <Route path='/novoprojeto' element={<NovoProjeto />}/>
                <Route path='/projetos' element={<Projetos />}/>
                <Route path='/projeto/:id' element={<Projeto />}/>
              </Route>
            </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
