import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path ="/team/details/:id">
          <TeamDetails></TeamDetails>
        </Route>
        <Route path ="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
