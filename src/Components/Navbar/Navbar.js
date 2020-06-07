import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navigation extends Component {
    

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/"><a className="navbar-brand" href="/"><img src="./assets/images/logo.svg" height='64px' width='64px' alt="PPR Logo" /></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/services">HR Consulting</NavDropdown.Item>
                            <NavDropdown.Item href="/bicultural">Bi-Cultural Expertise</NavDropdown.Item>
                            <NavDropdown.Item href="/training">Training</NavDropdown.Item>
                            <NavDropdown.Item href="/talent">Talent Acquisition</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/mission">Mission & Values</Nav.Link>
                        <Nav.Link href="/team">Meet the Team</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/blog">HR Insider</Nav.Link>
                        <Nav.Link href="/careers">Career Opportunities</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;