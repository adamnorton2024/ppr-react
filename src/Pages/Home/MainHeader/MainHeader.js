import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div `
    #main-header{
        background-image: url('/assets/images/office-zen.jpg');
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        margin-top: 0px;
        margin-bottom: 0px;

        .text-box{
            background-color: rgba(63,69,97,0.75);
            border-radius: .25em;
            padding: 4em;
            margin: 5em 0em;
            .display-4{
                color: ${props => props.theme.colors.orange}; 
                margin-bottom:.5em;

                @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 2em;
                }

                @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1.75em;
                }
            }
            .sub-title{
                    color: ${props => props.theme.colors.orange};
                    font-size: 1.5em;
                    margin-top: 1em;
                }

                li{
                    color: white;
                }
        }

        .description{
            color: white;
            .lead{
                @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone}) and (max-width:                         $breakpoint-landscape-phones) {
                font-size: 1em;
                }

                @media only screen and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                font-size: 1em;
                }
            }  
        }
    }
`

class MainHeader extends Component {

    render(){
        return(
            <ThemeProvider theme={theme}>
                <Div>
                    <div className="section pt-3 pb-3" id='main-header'>
                        <div className="row mx-0">
                            <div className="col-lg-7 col-md-12 my-5">
                                <div className="text-box">
                                    <h1 className="display-4">What Can We Do For You?</h1>
                                    <div className="description">
                                        <p className="lead">People Performance Resources, LLC (PPR) was designed with our clients in mind.</p>
                                        <p className="sub-title">Our services are always tailored to your needs</p>
                                        <p className="lead">When we become your strategic HR business partner, you will receive a high level of personal commitment and dedication that is Best-in-Class. For each project, we will become an extension of your organization to show a unified vision to all employees. We also provide a true ROI as every dollar you spend goes towards developing and receiving best practices, and there is never down-time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Div>
            </ThemeProvider>
        );
    }
}

export default MainHeader;