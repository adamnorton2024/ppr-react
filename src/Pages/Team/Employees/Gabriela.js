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

class Gabriela extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-4 pb-3" id="gabriela">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto" src="/assets/images/team/gabriela.jpg" alt="Gabriela" id="img-gabriela" />              
                            </div>
                                <div className="col-md-8 col-sm-12 text-box-container">
                                    <div className="text-box">
                                        <div className="description">
                                            <h1 className="display-4">Gabriela Norton</h1>
                                            <blockquote>
                                                <p className="lead">SPHR<br/>Founder, President & CEO</p>
                                                    <p className="strengths">Positivity | Achiever | Arranger | Responsibility | Input</p>
                                            </blockquote>

                                                <p>Gabriela established PPR in February of 2010, following a dream to build a firm that could positively influence work environments. Since securing PPR’s first client, the Dallas Regional Chamber, Gabriela insisted in going above and beyond for client needs, something that opened other doors. To this date, PPR has grown 100% as a result of referrals. Gabriela has thoughtfully selected a group of talented experts who compliment her, surrounding herself with outstanding and passionate HR professionals that now form a well-rounded team in all facets of human resources. PPR’s bar is high and under Gabriela’s leadership, her team has consistently delivered with excellence in all they do, partnering with clients to create excellent workplaces.</p>

                                                <p>Gabriela's areas of focus include operational excellence, executive and board level decision making, bilingual/bicultural expertise, board governance support, CEO succession planning, human capital analysis, executive coaching, re-inventing performance management methodologies, executive compensation, diversity, equity and inclusion, strategic planning and development, change management, employment compliance, organizational enhancement, executive searches, and more.</p>

                                                <p>Gabriela participates in several causes that support low-income communities, women’s causes, at risk children and conservation efforts.</p>

                                                <p>When not enjoying time at PPR, Gabriela is a foodie who loves to travel, run, snorkel, and spend time with her family and rescued dog, Harley.</p>
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

export default Gabriela;