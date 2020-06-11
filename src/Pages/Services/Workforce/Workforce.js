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

        #img-workforce{
                background-image: url('assets/images/services/services_workforce.jpg');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: cover;
            }
    }

`

class Workforce extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-6 col-sm-12 px-5 bg-white" id='img-workforce'>

                            </div>
                            <div className="col-md-6 col-sm-12 px-5 my-5">
                                <div className="text-box">
                                    <h1 className="display-4">Workforce Planning and Talent Attraction</h1>
                                    <div className="description">
                                        <p className="lead">Workforce planning is often overlooked, but best HR departments know that leaving this practice out of the equation creates an operational deficiency. The term refers to the process of ensuring an organization has current and future access to the human capital it needs to perform effectively. It involves identifying current and future personnel needs and exploring the most appropriate and cost-effective methods to recruit and retain talent. There is also an element of continual analysis of workforce effectiveness and implementing the necessary measures, such as professional development, to ensure teams remain relevant and ready to support growth. PPR aligns workforce planning with overall business objectives and long-term vision. This leads to state-of-the-art tools for overall continuity planning, which includes succession planning of not just top decision maker, but everyone who is regarded as a part of the core team. A few other
                        examples of key workforce planning areas:</p>
                                        <ul>
                                            <li className="lead">Skills Gap Analysis</li>
                                            <li className="lead">Competencies Modeling</li>
                                            <li className="lead">Job Descriptions</li>
                                            <li className="lead">Cost-to-Hire</li>
                                            <li className="lead">Turnover Calculation</li>
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

export default Workforce;