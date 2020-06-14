import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
        background-color: ${props => props.theme.colors.white};
        padding: 3em 3em;
        @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phones}) {
                    padding: 2em;
                }

        @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
            padding: 1.75em;
        }

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
        }
        .text-box{
            .display-4{
                    color: ${props => props.theme.colors.light_blue}; 
                    margin-bottom:.5em;

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
        }

        #img-culture{
                background-image: url('/assets/images/services/services_culture.jpg');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: cover;
            }
    }

`

class CultureDev extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow">
                            <div className="col-md-6 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <h1 className="display-4">Culture Development</h1>
                                    <div className="description">
                                        <blockquote className="blockquote">
                                            <p className="lead"><em>“Culture is the glue that bonds everyone together, or simply makes people feel stuck.”</em><cite className="blockquote-footer" title="Gabriela Norton President & CEO of PPR"><em>Gabriela Norton President & CEO of PPR</em></cite></p>
                                        </blockquote>

                                        <p className="lead">At PPR, we thrive in understanding the nuances of each culture since we know each has their own DNA – completely different from another regardless of industry or demographics. Throughout our years of experience, we have gained valuable insight about       successful and unsuccessful common cultural threads, so we bring this objective and educated perspective to our clients to empower them in decision making and elevate their cultural presence in a tangible way. Here are the top cultural areas we most commonly support via proprietary tools or methodologies we are certified in, such as StrengthsFinder:</p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <ul>
                                                    <li className="lead">Strengths Based</li>
                                                    <li className="lead">High-Performance</li>
                                                    <li className="lead">Employee Engagement Based on Survey Data Collection</li>
                                                    <li className="lead">Stay Interviews</li>
                                                    <li className="lead">Great Place to Work Development</li>
                                                    <li className="lead">Diversity, Equity and Inclusion</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <ul>
                                                    <li className="lead">Team Cohesion</li>
                                                    <li className="lead">Rewards and Recognition</li>
                                                    <li className="lead">Employee Relations</li>
                                                    <li className="lead">Disciplinary Guidance</li>
                                                    <li className="lead">Conflict Resolution</li>
                                                    <li className="lead">Investigations</li>
                                                    <li className="lead">Exit Interviews</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 px-5" id='img-culture'>

                            </div>
                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default CultureDev;