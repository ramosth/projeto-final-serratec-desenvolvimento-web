import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './paginas/componentes/Navbar';
import Cadastro from './paginas/Cadastro';

function App() {

  const menu = [
    {
      titulo: 'Inicio',
      link: '/'
    },
    {
      titulo: 'Produtos',
      link: '/produtos'
    },
    {
      titulo: 'Cadastre-se',
      link: '/cadastro'
    },
    {
      titulo: 'Login',
      link: '/login'
    },
  ];

  return (
    <BrowserRouter>
      <Navbar navbar={menu} />
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
