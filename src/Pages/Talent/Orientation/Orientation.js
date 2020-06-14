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

        #img-orientation{
                background-image: url('/assets/images/services/talent-new-hire.jpg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: cover;
            }
        
    }

`

class Orientation extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-6 col-sm-12 px-5 bg-white" id='img-orientation'>

                            </div>
                            <div className="col-md-6 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <h1 className="display-4">New Hire Orientation</h1>
                                    <div className="description">
                                        <p className="lead">We provide support developing custom orientation programs and processes, creating new hire forms, and providing HR counsel as needed for the hiring manager throughout the on-boarding and orientation process. The intent is for our Consultant to support the organization and to continue developing ways to strengthen the on-boarding process to make it
                        a very informative tool for all new employees. Part of this process will include partnering with the hiring manager to suggest communication and strategic steps to ensure an informative and successful transition for the new employee.</p>
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

export default Orientation;