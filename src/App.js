import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Guide from './Guide';
import GuideHero from './GuideHero';
import GuidePost from './GuidePost';
import Community from './Community';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <div className="gameLogo">ROV</div>
          <div className="appLogo">lnw</div>
        </header>
        <nav className="appNav">
          <NavLink to="/" exact className="navMenu">Home</NavLink>
          <NavLink to="/guide" className="navMenu">Guide</NavLink>
          <NavLink to="/community" className="navMenu">Community</NavLink>
        </nav>
        <main className="appMain">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/guide" exact component={Guide}/>
            <Route path="/guide/hero/:heroName" component={GuideHero}/>
            <Route path="/guide/post/:postId" component={GuidePost} />
            <Route path="/community" exact component={Community}/>
          </Switch>

        </main>
      </div>
    );
  }
}

export default App;
