import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
        background-color: #f4f4f4;
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

        #img-strategy{
                background-image: url('/assets/images/services/services_strategy.jpg');
                background-repeat: no-repeat;
                background-position: center right;
                background-size: cover;
            }

        
    }

`

class Strategy extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner" id="hisp-owned">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-6 col-sm-12 px-5 bg-white" id='img-strategy'>

                            </div>
                            <div className="col-md-6 col-sm-12 px-5 my-5">
                                <div className="text-box">
                                    <h1 className="display-4">Strategy and Change Management</h1>
                                    <div className="description">
                                        <p className="lead">Successful strategies require strong planning and execution. This is closely followed by a well-balanced change management that includes team cohesion, sustainable model, oversight of established tactics and periodic measurement of success/risk assessment. Our experts understand the value of buy-in when it comes to strategy and change management. Because of this, we have authored the following practices, which continue to deliver value to our clients:</p>
                                        <ul>
                                            <li className="lead">Strategic Support to Top Decision Makers and Boards</li>
                                            <li className="lead">Development of KPI's/Organizational Goals that Cascade to Full Team</li>
                                            <li className="lead">Planning Tools for Strategic Analysis</li>
                                            <li className="lead">Corporate Governance</li>
                                            <li className="lead">Cohesion with Leadership Vision</li>
                                            <li className="lead">Marrying Human Resources with Operational and Financial Excellence</li>
                                            <li className="lead">(Re)Development of Mission, Vision, and Values</li>
                                            <li className="lead">Introduction of Building Standard Model</li>
                                            <li className="lead">Leadership Accountability around Strategic Planning and Goals</li>
                                        </ul>
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

export default Strategy;