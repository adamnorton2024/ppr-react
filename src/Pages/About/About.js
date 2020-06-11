import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";

const Div = styled.div `

    .jumbotron{
        background-color: transparent;

        h1{
            color: ${props => props.theme.colors.light_blue};
        }
    } 

    #about-header{
            background-image: url('/assets/images/about-banner.jpg');
            background-repeat: no-repeat;
            background-position: center right;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
            .text-box{
                background-color: rgba(63,69,97,0.75);
                border-radius: .25em;
                padding: 4em;
                .display-4{
                    color: ${props => props.theme.colors.orange}; 
                    margin-bottom:.5em;

                    @media only screen and (min-width:${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                        font-size: 2em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                        font-size: 1.75em;
                    }
                }

                .sub-title{
                    color: ${props => props.theme.colors.orange};
                    font-size: 2em;
                    margin-top: 1em;
                }

                p{
                    color: ${props => props.theme.colors.white};
                }

            }
            .description{
                color: ${props => props.theme.colors.white};
                .lead{
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone}) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }                
            }
        }   
`


class About extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <div className="jumbotron jumbotron-fluid pt-0 mb-0">
                        <div className="container">
                            <h1 className="display-1 mb-0">About Our Team</h1>
                        </div>
                    </div>

                    <div className="section pt-3 pb-3" id='about-header'>
                        <div className="row mx-0">
                            <div className="col-lg-7 col-md-12 my-5">
                                <div className="text-box">
                                    <h1 className="display-4">Our Story</h1>
                                    <div className="description">
                                        <p className="lead">Since our founding in February 2010, we have insisted in becoming a strategic, responsive and collaborative human capital management partner. Organizations as diverse as Southwestern Medical Foundation, Dallas Regional Chamber, The Dallas Foundation, Dallas Museum of Art, United Way of Metropolitan Dallas, Verde Valle Foods, Palacios & Sons (Charras Tostadas), Out Teach and many others, have trusted our expertise and through this process, we have been
                                        able to be a part of creating better workplaces.</p>
                                        <p className="lead">A commitment of excellence to each client is non-negotiable within our culture, so our HR consultants work closely as a unified extension of the teams we support. That level of trust and respect is important in achieving the goal of confident subject matter experts. At the end of the day, we want our clients to know that we’re there to handle the details of HR management so they can focus on the core issues of running their business.</p>
                                        <p className="lead">Each client presents us with unique environments, their own company culture, and individualized needs, which means there is no template for what we do. We believe in personalizing our approach to align leadership’s vision, while providing subject matter guidance and best practice recommendations, a tactic that has consistently yield positive outcomes.</p>
                                        <p className="lead">It’s our passion that drives these results. We want our clients to know that they have access to a consultant who is intimately familiar with their operations, their culture, and their team. Not only are we there to find positive solutions and mitigate risks, our goal is to elevate organizational performance and introduce best practices to achieve greater efficiency and profitability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Div>
            </ThemeProvider>
        )
    }
}

export default About;