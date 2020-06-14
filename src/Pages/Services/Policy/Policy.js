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

        #img-policy{
                background-image: url('/assets/images/services/services_policy.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
    }

`

class Policy extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow">
                            <div className="col-md-6 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <h1 className="display-4">Policy & Procedures and Risk Management</h1>
                                    <div className="description">
                                        <p className="lead">Compliance and the ever-changing employment legalities can be daunting. At PPR, our experts invest in constant research and professional development to ensure we keep you informed on the latest and most relevant information regarding work related compliance, legislative items and liability avoidance. Hottest topics where knowledge meets best practice
                        implementation:</p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <ul>
                                                    <li className="lead">Personalized Handbooks</li>
                                                    <li className="lead">Targeted Policies</li>
                                                    <li className="lead">Employment Agreements</li>
                                                    <li className="lead">Hiring and On-boarding Practices</li>
                                                    <li className="lead">Workplace Legal Compliance</li>
                                                    <li className="lead">Harassment</li>
                                                    <li className="lead">Investigations</li>
                                                    <li className="lead">Workers' Compensation</li>
                                                    <li className="lead">Discipline and Termination Practices</li>
                                                    <li className="lead">HR Function Procedures</li>
                                                    <li className="lead">Protected Activities</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <ul>
                                                    <li className="lead">Safety</li>
                                                    <li className="lead">Severance Agreements</li>
                                                    <li className="lead">Drug Testing</li>
                                                    <li className="lead">Fitness for Duty</li>
                                                    <li className="lead">FLSA Exemption Testing</li>
                                                    <li className="lead">Reasonable Accommodation</li>
                                                    <li className="lead">Wage and Hour Compliance</li>
                                                    <li className="lead">Accident Handling Procedure</li>
                                                    <li className="lead">Audits</li>
                                                    <li className="lead">Retention Guidelines</li>
                                                    <li className="lead">Workplace Violence Program</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 px-5" id='img-policy'>

                            </div>
                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default Policy;