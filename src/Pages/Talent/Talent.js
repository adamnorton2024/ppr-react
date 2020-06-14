import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import Hiring from './Hiring/Hiring';
import Background from './Background/Background';
import Orientation from './Orientation/Orientation';


const Div = styled.div`
    .jumbotron{
        background-color: transparent;
        margin: 0px;
        padding-top: 0px;
        padding-bottom: 1em;
        h1{
            color: ${props => props.theme.colors.light_blue};
        }
    }

    #talent-header{
            background-image: url('/assets/images/talent-banner.jpg');
            background-repeat: no-repeat;
            background-position: bottom center;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
            .text-box{
                background-color: rgba(63,69,97,0.75);
                border-radius: .25em;
                padding: 4em;
                @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phones}) {
                    padding: 2em;
                }

                @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    padding: 1.75em;
                }
                    .display-4{
                        color: ${props => props.theme.colors.orange};
                        margin-bottom:.5em;

                    @media only screen and (min-width:${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                            font-size: 2em;
                        }

                        @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                            font-size: 1.75em;
                        }
                    }

                    .sub-title{
                    color: ${props => props.theme.colors.orange};
                    font-size: 2em;
                    margin-top: 1em;
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

                .description{
                color: ${props => props.theme.colors.white};
                text-shadow: 1px 1px black;

                .lead{
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

                
                }

                p{
                    color: white;
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

            }
            
        }

      

`


class Training extends Component {

    render() {
        return (

            <div>
                <ThemeProvider theme={theme}>
                    <Div>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">Services</h1>
                            </div>
                        </div>

                        <div class="section pt-3 pb-3" id='talent-header'>
                            <div class="row mx-0">
                                <div class="col-lg-7 col-md-12 my-5">
                                    <div class="text-box">
                                        <h1 class="display-4">Talent Acquisition</h1>
                                        <div class="description">
                                            <p class="lead">When it comes to the right employee for your team, we provide best practices and will partner with hiring managers to fully understand your needs.</p>
                                            <p class="lead">With extensive expertise and a positive track record of delivering full-service talent management and executive placement solutions, our experts can support your staff growth needs.</p>
                                        </div>
                                        <p class='sub-title'>Finding Your Next Team Member</p>
                                        <p class="lead">PPR has earned a strong reputation as a subject matter expert in all people matters. Our practices are rooted in years of both academic and practical hands-on experience partnering with executive teams, boards, and the business community at large.</p>
                                        <p class="lead">Our consultants are uniquely positioned to learn from a diverse group of leaders. We, in essence, have first-hand knowledge as to the kind of leadership philosophies that work and also those that do not. This perspective allows us to identify the combination of competencies and behavioral performance that delivers clients a highly qualified match, which is critical at all levels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Div>
                </ThemeProvider>
               <Hiring />
               <Orientation />
               <Background />
            </div>

        )
    }
}

export default Training;