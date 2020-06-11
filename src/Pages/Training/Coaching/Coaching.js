import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
        background-color: ${props => props.theme.colors.white};
        padding: 3em 3em;
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

        #img-coaching{
                background-image: url('/assets/images/services/train-coaching.jpg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: cover;
            }
    }

`

class Coaching extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow">
                            <div className="col-md-6 col-sm-12">
                                <div className="text-box">
                                    <h1 className="display-4">Executive Coaching</h1>
                                    <div className="description">
                                        <p className="lead">We offer high-level, strategic coaching for Senior Management and Executive/C-Level teams in order to ensure continued operational or transitional success. Our programs include:</p>
                                        <ul>
                                            <li>Successful Leadership</li>
                                            <li>StrengthsFinder Based Leadership</li>
                                            <li>Emotional Intelligence</li>
                                            <li>Unconsious Bias</li>
                                            <li>Foundational Skills for First Time Managers/Supervisors</li>
                                            <li>Embracing Change</li>
                                            <li>Contributing to Team Success</li>
                                            <li>Taking Charge of Your Own Development</li>
                                            <li>Time Management</li>
                                            <li>Performance Appraisals</li>
                                            <li>Workplace Diversity</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 px-5" id='img-coaching'>

                            </div>
                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default Coaching;