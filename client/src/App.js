import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import AllBands from './components/AllBands';
import Band from './components/Band';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GlobalNav from './components/GlobalNav.js';
import { setAxiosDefaults } from './util';

class App extends Component {
  componentWillMount(){
    setAxiosDefaults()
    const value =localStorage.getItem("test");
  }
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllArtists}/>
          <Route exact path="/artist/:id" component={Artist}/>
          <Route exact path="/" component={AllBands}/>
          <Route exact path="/band/:id" component={Band}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn} />
        
        </div>
      </Router>  
    );
  }
}

export default App;
