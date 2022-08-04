import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from '../Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Services/Services';
import Bicultural from '../../Pages/Bicultural/Bicultural';
import Training from '../../Pages/Training/Training';
import Talent from '../../Pages/Talent/Talent';
import Mission from '../../Pages/Mission/Mission';
import Compensation from '../../Pages/Compensation/Compensation';
import Team from '../../Pages/Team/Team';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Careers from '../../Pages/Careers/Careers';
import Contact from '../../Pages/Contact/Contact';
import NoMatch from '../../Pages/NoMatch/NoMatch';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollUpButton/ScrollToTop';
import styled from 'styled-components';

const AppBackground = styled.div`
  .app-background{
    background:
    linear-gradient(to top right,
    rgba(20, 20, 30, 0.8), 
    rgba(7, 72, 92, 0.8)
    ),
    url("/logo.svg");
    width: 100%;
    height: auto;
    background-size: 300%;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    overflow: hidden;
}
`

function App() {
  return (
    <AppBackground className="App">
      <div className="app-background">
        <React.Fragment>
        <Router>
          <Navigation className="no-bg" />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/services" element={<Services/>} />
            <Route exact path="/bicultural" element={<Bicultural/>} />
            <Route exact path="/training" element={<Training/>} />
            <Route exact path="/talent" element={<Talent/>} />
            <Route exact path="/compensation" element={<Compensation/>} />
            <Route exact path="/mission" element={<Mission/>} />
            <Route exact path="/team" element={<Team/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route exact path="/careers" element={<Careers/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route element={<NoMatch/>} />
          </Routes>
        </Router>
        <Footer />
        <ScrollToTop />
      </React.Fragment>
      </div>
    </AppBackground>
    

  );
}

export default App;
