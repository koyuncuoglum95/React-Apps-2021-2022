import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';

import './App.css';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/search">
            <SearchResult />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;