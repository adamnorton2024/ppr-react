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

class Karen extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-3" id="karen">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto" src="/assets/images/team/placeholder-female.jpg" alt="karen" id="img-karen" />
                            </div>
                            <div className="col-md-8 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <div className="description">
                                        <h1 className="display-4">Karen Hester</h1>
                                        <blockquote>
                                            <p className="lead">JD, MA<br/>Human Capital Consultant</p>
                                            <p className="strengths">Learner | Input | Responsibility | Relator | Intellection</p>
                                        </blockquote>

                                        <p>With over 25 years of experience in human resources, Karen is a seasoned professional specializing in nonprofit organizations. Her expertise spans compliance, employee relations, and policy development, all focused on helping organizations create positive, compliant, and effective workplaces. Karen partners with leaders to design HR strategies that foster employee engagement while ensuring adherence to evolving labor laws and regulations.</p>

                                        <p>Karen holds a JD from the University of the Pacific, McGeorge School of Law, an MA in Communication from Arizona State University, and a BA in Organizational Communication from CSU, Sacramento. Her unique blend of legal, communication, and organizational skills enables her to provide thoughtful, practical solutions to complex HR challenges. Karen’s strategic, solution-oriented approach has earned her a reputation as a trusted partner for organizations seeking to optimize their HR practices.</p>

                                        <p>In her spare time, Karen enjoys getting outdoors with her husband and their labradoodle, Gracie, spending time with her children and their families, and traveling.</p>
                                        
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

export default Karen;
