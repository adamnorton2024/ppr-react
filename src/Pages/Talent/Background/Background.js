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
            .sub-title{
                    color: ${props => props.theme.colors.orange};
                    font-size: 2em;
                    margin-top: 1em;
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone}) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }
        }

        #img-background-check{
                background-image: url('/assets/images/services/talent-background-check.jpg');
                background-repeat: no-repeat;
                background-position: center left;
                background-size: cover;
            }
        
    }

`

class Background extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow">
                            <div className="col-md-6 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <h1 className="display-4">Background Checks</h1>
                                    <div className="description">
                                        <p className="lead">Many employers may not realize the amount of legal steps associated with background checks. From timing on when these should take place to the required forms that must be completed, this session will provide all of the information to
                                        avoid costly fines.</p>
                                    </div>
                                    <h1 className="sub-title">Form I-9: Employment Eligibility Verification</h1>
                                    <div className="description">
                                        <ul>
                                            <li>When and How to Complete the Form I-9</li>
                                            <li>Filing and Storage</li>
                                            <li>Audits</li>
                                            <li>Identifying and Correcting Form I-9 Errors</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 px-5" id='img-background-check'>

                            </div>
                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default Background;