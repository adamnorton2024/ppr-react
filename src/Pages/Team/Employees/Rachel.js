import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
          background-color: ${props => props.theme.colors.white};  
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

class Rachel extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-3" id="rachel">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto" src="/assets/images/team/rachel.jpg" alt="rachel" id="img-rachel" />
                            </div>
                            <div className="col-md-8 col-sm-12 px-5 my-5">
                                <div className="text-box">
                                    <div className="description">
                                        <h1 className="display-4">Rachel</h1>
                                        <blockquote>
                                            <p className="lead">J.D., MS., PHR, SHRM-CP<br/>Sr. HR Consultant & Compliance Specialist</p>
                                            <p className="strengths">Empathy | Includer | Connectedness | Positivity | Woo</p>
                                        </blockquote>

                                        <p>Rachel’s practice focuses on HR legal solutions, best practices, and compliance. She is a licensed attorney and a graduate of Texas A&M University School of Law.</p>
                                        <p>Rachel is an active member and has served on the boards at Tarrant County Bar Association Women’s Section, Fort Worth Tri Club and currently serves on the Board at Fort Worth Christian School.</p>
                                        <p>For fun, Rachel enjoys endurance sports and has finished multiple marathons and triathlons, including the New York City Marathon and five half Ironman races.</p>
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

export default Rachel;