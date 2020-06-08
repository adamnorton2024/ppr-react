import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Services/Services';
import Bicultural from '../../Pages/Bicultural/Bicultural';
import Training from '../../Pages/Training/Training';
import Talent from '../../Pages/Talent/Talent';
import Mission from '../../Pages/Mission/Mission';
import Team from '../../Pages/Team/Team';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Careers from '../../Pages/Careers/Careers';
import Contact from '../../Pages/Contact/Contact';
import NoMatch from '../../Pages/NoMatch/NoMatch';


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
