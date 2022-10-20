import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";

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
            }
        }


        #img-marketpricing{
                background-image: url('/assets/images/services/comp-pricing.jpg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: cover;
            }
    }

`

class ContactFormc extends Component {
    
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className='banner'>
                        <div className='row mx-0 shadow'>
                            <div className='text-box'>
                                <h1 className='display-4 px-5'>Contact Us for Compensation Services</h1>
                                <div className='description p-5'>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default ContactFormc;