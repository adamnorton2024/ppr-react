import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    
    .banner{
        background-color: ${props => props.theme.colors.white};
        padding: 3em 3em;
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

        #img-latina{
                background-image: url('/assets/images/services/bi-cultural-latina.jpg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: cover;
            }
    }

`

class TalentAcquisition extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section class="banner px-3 pt-3 pb-3 my-5">
                        <div class="row mx-0 shadow">
                            <div class="col-md-6 col-sm-12 px-5 my-5">
                                <div class="text-box">
                                    <h1 class="display-4">Talent Acquisition</h1>
                                    <div class="description">
                                        <p class="lead">High-level placement of Spanish speaking professionals.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 px-5" id='img-latina'>

                            </div>
                        </div>
                    </section> 
                </Div>
            </ThemeProvider>
        )
    }
}

export default TalentAcquisition;