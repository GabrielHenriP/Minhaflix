import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';


import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


// desafio: fazer uma pagona de erro melhor
const Pagina404 = ()=> (<h1>ERROR 404</h1>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path='/pages/cadastro/Video' component={CadastroVideo}></Route>
      <Route to='/pages/cadastro/Categoria' component={CadastroCategoria}></Route>
      <Route component={Pagina404} />
    </Switch>
  
  </BrowserRouter>,
  document.getElementById('root')
);


