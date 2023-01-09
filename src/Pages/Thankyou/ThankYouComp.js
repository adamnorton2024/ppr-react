import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../Config/Theme';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

    #contact-header{
            background-repeat: no-repeat;
            background-position: center left;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
            color: white;
            padding: 10rem;
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

                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
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

                p{
                    color: white;
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

                a{
                    color: ${props => props.theme.colors.orange} !important;
                    text-decoration: none;

                        &:visited{
                            color: ${props => props.theme.colors.orange};
                            text-decoration: none;
                        }

                        &:hover{
                            color: ${props => props.theme.colors.white};
                            text-decoration: none;
                        }
                    }
                
                #address{
                    color: ${props => props.theme.colors.orange};
                }

            }
        }
`


const ThankYouComp = () => {

        return (
            <div>
                <HelmetProvider>
              <Helmet>
                <html lang="en" />
                <title>Thank You for your interest in our Compensation Services</title>
                <meta
                  name="description"
                  content="Thank You for your interest in our Compensation Services"
                />
                <meta 
                  name='keywords'
                  content="compensation consulting contact form has been completed"
                />
              </Helmet>
            </HelmetProvider>
                <ThemeProvider theme={theme}>
                    <Div>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">Thank You</h1>
                            </div>
                        </div>

                        <div callName="section pt-3 pb-3" id='contact-header'>
                            <p className='lead'>Thank you for sending in your request for your compensation needs.  We will be in touch with you very soon.</p>
                            <p className='lead'>If you would like a quicker response, please reach out direction to our Compensation Specialist Sherri Gates.</p>
                            <p className="lead">
                                Email:{" "}
                                <a
                                href="mailto:sgates@pprhr.com?subject=Compensation Services Inquiry"
                                >
                                {" "}
                                sgates@pprhr@pprhr.com
                                </a>
                            </p>
                        </div>
                    </Div>
                </ThemeProvider>
                
                
            </div>
            
        )
}

export default ThankYouComp;

