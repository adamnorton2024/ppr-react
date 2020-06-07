import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navbar/Navbar';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Bicultural from '../Bicultural/Bicultural';
import Training from '../Training/Training';
import Talent from '../Talent/Talent';
import Mission from '../Mission/Mission';
import Team from '../Team/Team';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Careers from '../Careers/Careers';
import Contact from '../Contact/Contact';
import NoMatch from '../NoMatch/NoMatch';


function App() {
  return (
    // <div className="App">
    //     <Navigation />
    // </div>
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/bicultural" component={Bicultural} />
          <Route exact path="/training" component={Training} />
          <Route exact path="/talent" component={Talent} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
