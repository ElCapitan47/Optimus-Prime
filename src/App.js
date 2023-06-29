import Home from "./Home";
import CheckPrime from "./CheckPrime";
import Navbar from "./Navbar";
import PrimeOrder from "./PrimeOrder";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./About";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
              <Switch>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route exact path='/about'>
                  <About/>
                </Route>
                <Route exact path='/checkPrime'>
                  <CheckPrime/>
                </Route>
                <Route exact path='/primeOrder'>
                  <PrimeOrder/>
                </Route>
              </Switch>
      </div>
      
    </div>
    </Router>
    
  );
}

export default App;
