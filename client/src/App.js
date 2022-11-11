import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EstadoJugador from './componentes/EstadoJugador';
import Lista from './componentes/Lista';
import TodosEquipos from './componentes/TodosEquipos';

const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <TodosEquipos />} />
          <Route path="/estado" exact render={()=> <EstadoJugador />} />
          <Route path="/lista" exact render={()=> <Lista />} />
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
