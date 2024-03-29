import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
          background-color: ${props => props.theme.colors.white};  
            .text-box-container{
            padding: 2em;
            @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phones}) {
                    padding: 1em;
                    margin: 0px;
                }

                @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    padding: 1em;
                    margin:0px;
                }
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

class Kathy extends Component {
    constructor() {
        super();

        this.state = {
            profilepic: "/assets/images/team/kathy.jpg"
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

    }

    handleMouseOver() {
        let num = Math.random();
        if (num < 0.6) {
            this.setState({ profilepic: '/assets/images/team/kathy_fun.jpg' });
        } else {
            this.setState({ profilepic: '/assets/images/team/kathy_fun2.jpg' });
        }
        
    }

    handleMouseOut() {
        this.setState({ profilepic: '/assets/images/team/kathy.jpg' });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-4" id="kathy">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto"
                                    onMouseOver={this.handleMouseOver}
                                    onMouseOut={this.handleMouseOut}
                                    src={this.state.profilepic}
                                    alt="kathy"
                                    id="img-kathy" />
                            </div>
                            <div className="col-md-8 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <div className="description">
                                        <h1 className="display-4">Kathy Bennett</h1>
                                        <blockquote>
                                            <p className="lead">MSHRM<br/>Talent Acquisition Consultant</p>
                                            <p className="strengths">Learner | Communication | Relator | Positivity | Strategic</p>
                                        </blockquote>

                                        <p>Kathy has over ten years of HR management experience and specializes in talent acquisition with a niche in executive searches. She has a passion for connecting top talent to the technical and soft skills our clients require in order to enhance their cultures. Kathy has led placements in both for-profit and non-profit environments, with great success placing specialized positions, development/fundraising professionals, and school leaders.  </p>
                                        <p>Kathy earned a M.S. in Human Resources Management and a B.A. in Management from the University of Texas at Arlington.</p>
                                        <p>For fun, Kathy has a heart for serving others and volunteers with nonprofit organizations. Kathy and her dog Dusty became a Certified Caring Canine team. Together, they make visits to local hospitals.</p>
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

export default Kathy;