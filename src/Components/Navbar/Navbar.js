import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";

const Div = styled.div `
    
    Nav{
        .dropdown{
        color: ${props => props.theme.colors.light_blue}; 

        .nav-item{
            color: ${props => props.theme.colors.light_blue};
            &:hover{
                color: ${props => props.theme.colors.orange} !important;
            } 
        }
    }

        .nav-link{
            color: ${props => props.theme.colors.light_blue} !important;

            &:hover{
                color: ${props => props.theme.colors.orange} !important;
            } 
        }

        .nav-contact{
            color: ${props => props.theme.colors.orange} !important;
            border: 1px solid color: ${props => props.theme.colors.orange} !important;

            &:hover{
                color: ${props => props.theme.colors.white} !important;
            }  
        }
    }

    Button{
        color: ${props => props.theme.colors.orange} !important;
            border: 1px solid color: ${props => props.theme.colors.orange} !important;

            &:hover{
                color: ${props => props.theme.colors.white} !important;
            }
    }    
    
`

class Navigation extends Component {
    

    render(){
        return(
            <ThemeProvider theme={theme}>
            <Div>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <div className="container">
                    <Navbar.Brand href="/"><img src="/logo.svg" height='128px' width='128px' alt="PPR Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown className="dropdown" title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item className="nav-item" href="/services">HR Consulting</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="/training">Training</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" href="/talent">Talent Acquisition</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-link" href="/mission">Mission & Values</Nav.Link>
                            <Nav.Link className="nav-link" href="/team">Meet the Team</Nav.Link>
                            <Nav.Link className="nav-link" href="/about">About Us</Nav.Link>
                            <Nav.Link className="nav-link" href="/blog">HR Insider</Nav.Link>
                            <Nav.Link className="nav-link" href="/careers">Career Opportunities</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="outline-warning"><Nav.Link className="btn nav-contact" href="/contact">Contact</Nav.Link></Button>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            </Div>
            </ThemeProvider>
        )
    }
}

export default Navigation;