import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
        background-color: #f4f4f4;
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

        #img-compliance{
                background-image: url('/assets/images/services/train-compliance.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
    }

`

class Compliance extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section class="banner">
                        <div class="row mx-0 shadow bg-white">
                            <div class="col-md-6 col-sm-12 px-5 bg-white" id='img-compliance'>

                            </div>
                            <div class="col-md-6 col-sm-12 text-box-container">
                                <div class="text-box">
                                    <h1 class="display-4">Compliance Training Topics</h1>
                                    <div class="description">
                                        <p class="lead">PPR will provide guides to critical subject matters for awareness and prevention including, but not limited to:</p>
                                        <ul>
                                            <li>Non-Harassment</li>
                                            <li>Alcohol and Drug Free Workplace</li>
                                            <li>Business Ethics</li>
                                            <li>Communication Skills</li>
                                            <li>Conflict Resolution</li>
                                            <li>Customer Service</li>
                                            <li>Preventing Violence in the Workplace</li>
                                            <li>Workplace Diversity</li>
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

export default Compliance;