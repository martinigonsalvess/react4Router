import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Html from './Html';
import Css from './Css';
import Js from './Js';
import { BrowserRouter as Router, Switch, Route}from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/html" component={Html} />
            <Route path="/css"  component={Css} />
            <Route path="/js" component={Js}/>
       
          </Switch>
        </div>

      </Router>


    );
  }


}


export default App;
