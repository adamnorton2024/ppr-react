import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
          background-color: ${props => props.theme.colors.white};  
            .text-box{
                padding: 1em;
                .display-4{
                    margin-bottom: .5em;

                    @media only screen and (min-width:${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                        font-size: 2em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                        font-size: 1.75em;
                    }
                }
                .lead{

                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone}) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }
                .strengths{
                    color: ${props => props.theme.colors.light_blue};


                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone}) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

            }
            
            .employee{
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                border-radius: 50%;
                border: 3px solid ${props => props.theme.colors.orange};
                margin: 2em;
            }
        }

`

class Jazmin extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-3" id="jazmin">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto" src="/assets/images/team/jazmin.jpg" alt="jazmin" id="jazmin" />
                            </div>
                            <div className="col-md-8 col-sm-12 px-5 my-5">
                                <div className="text-box">
                                    <div className="description">
                                        <h1 className="display-4">Jazmin</h1>
                                        <blockquote>
                                            <p className="lead">M.S., SHRM-CP<br />HR Consultant & StrengthsFinder Coach</p>
                                            <p className="strengths">Deliberative | Restorative | Harmony | Intellection | Input</p>
                                        </blockquote>

                                        <p>Jazmin provides a unique combination of Psychology and behavior understanding to PPR’s people-focused initiatives. As a certified StrengthsFinder Coach by the Gallup organization, Jazmin facilitates organizational cohesiveness through training in this methodology.</p>
                                        <p>Jazmin holds an M.S. in Applied Psychology from the University of Southern California and a B.S. in Psychology from Austin College.</p>
                                        <p>Jazmin enjoys fostering animals through Dallas Pets Alive! as well as finding new and exciting restaurants in Dallas and beyond.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default Jazmin;