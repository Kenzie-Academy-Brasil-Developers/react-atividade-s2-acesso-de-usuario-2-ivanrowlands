
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import { members } from './components/members';
import Costumer from './pages/costumer';
import Company from './pages/company';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members}/>
          </Route>
          <Route path="/customer/:id">
            <Costumer/>
          </Route>
          <Route path="/company/:id">
            <Company/>
          </Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
