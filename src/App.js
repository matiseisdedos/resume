import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Error404 from './views/Error404';


function App() {
  return (
    <Switch> {/*Aca se puede usar switch (Se queda con la primer ruta que conincide) or fragments*/}
      <Route exact path="/" component={Home} />
      <Route path="*" component={Error404} />
    </Switch>
  );
}

export default App;
