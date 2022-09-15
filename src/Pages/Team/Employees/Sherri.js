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

class Sherri extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-3" id="sherri">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto" src="/assets/images/team/sherri.jpg" alt="sherri" id="img-sherri" />
                            </div>
                            <div className="col-md-8 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <div className="description">
                                        <h1 className="display-4">Sherri Gates</h1>
                                        <blockquote>
                                            <p className="lead">CCP<br/>Senior Compensation Consultant</p>
                                            <p className="strengths">Responsibility | Belief | Harmony | Arranger | Maximizer</p>
                                        </blockquote>

                                        <p>Sherri is a Sr. certified compensation expert with over fifteen years of extensive experience. Her diverse background includes supporting both large and small organizations in a variety of industries. Her primary areas of focus include leading PPR’s compensation business that include implementing best practices in projects such as base pay administration, short-term incentive plan design and administration, compensation structure personalization, market pricing analysis, job documentation, pay structure design and implementation, HR process implementation, employee communications, merger & acquisition integration, FLSA audits, HRIS reporting and implementation, employee recognition programs, and performance management.</p>

                                        <p>Sherri is a detailed-oriented with a proven history of positively influencing leadership via  a combination of subject matter expertise, relationship-building, and advanced analytical skills. She also has a proven track record of excelling in both strategic initiatives, and the tactical application of action items to ensure compensation best practices are successfully tied to operational excellence. </p>

                                        <p>Sherri earned a B.A. in English from Southern Methodist University.   </p>

                                        <p>For fun, Sherri likes to volunteer at Cornerstone Assistance Network of North Central Texas, a faith-based nonprofit that takes a comprehensive approach to helping neighbors in need. </p>
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

export default Sherri;