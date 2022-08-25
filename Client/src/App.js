import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Users from './users/pages/Users';
import NewPalce from './places/pages/New-place';
import './App.css';

const App = () => {
  return (
  <Router>
    <Switch>
    <Route path="/" exact>  
    <Users />
    </Route>
    <Route path="/places" exact>
    <NewPalce />
    </Route>
  <Redirect  to="/"/>
  </Switch>
  </Router>
  );
}

export default App;
