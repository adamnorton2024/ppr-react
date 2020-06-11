import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";


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

    #career-header{
            background-image: url('/assets/images/career-banner.jpg');
            background-repeat: no-repeat;
            background-position: top right;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
            .text-box{
                background-color: rgba(63,69,97,0.75);
                border-radius: .25em;
                padding: 4em;
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
                }

                p{
                    color: ${props => props.theme.colors.white};
                }

            }
            .description{
                color: ${props => props.theme.colors.white};
                .lead{
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone}) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

                
            }
        }
       

`


class Career extends Component {

    render() {
        return (

            <div>
                <ThemeProvider theme={theme}>
                    <Div>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">Career</h1>
                            </div>
                        </div>

                        <div class="section pt-3 pb-3" id='career-header'>
                            <div class="row mx-0">
                                <div class="col-lg-7 col-md-12 my-5">
                                    <div class="text-box">
                                        <h1 class="display-4">Career Opportunities</h1>
                                        <div class="description">
                                        </div>
                                        <p class='sub-title'>Finding Your Next Team Member</p>
                                        <p class="lead">These are some of the positions we are currently sourcing for. If you or anyone you know would be a good fit, feel free to reach out to us for more information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="hire-jobs"></div>
                    </Div>
                </ThemeProvider>
            </div>

        )
    }
}

export default Career;