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

class Cindy extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-3" id="cindy">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto" src="/assets/images/team/cindy.jpg" alt="cindy" id="img-cindy" />
                            </div>
                            <div className="col-md-8 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <div className="description">
                                        <h1 className="display-4">Cindy Wall</h1>
                                        <blockquote>
                                            <p className="lead">SPHR, SHRM-SCP<br/>Sr. HR Consultant</p>
                                            <p className="strengths">Responsibility | Intellection | Input | Arranger | Adaptability</p>
                                        </blockquote>

                                        <p>Cindy has over 20 years of HR, recruitment and talent management, employee relations counseling, retention, strategic planning, compliance, policy development and implementation, and total rewards and executive compensation.</p>
                                        <p>Cindy enjoys reading, baking and spending time with her husband, daughter, and their two dogs. She is originally from New England, so she a big fan of all New England sports teams – especially the Patriots and Red Sox! </p>
                                        
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

export default Cindy;