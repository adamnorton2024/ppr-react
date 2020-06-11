import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    
    .banner{
        background-color: #f4f4f4;
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

        #img-hisp-owned{
                background-image: url('/assets/images/services/bi-cultural-team.jpg');
                background-repeat: no-repeat;
                background-position: top left;
                background-size: cover;
            }
    }

`

class HispanicOwned extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-3 my-5" id="hisp-owned">
                        <div className="row mx-0 shadow my-5 bg-white">
                            <div className="col-md-6 col-sm-12 px-5 bg-white" id='img-hisp-owned'>

                            </div>
                            <div className="col-md-6 col-sm-12 px-5 my-5">
                                <div className="text-box">
                                    <h1 className="display-4">Hispanic Owned Corporations</h1>
                                    <div className="description">
                                        <p className="lead">Support to Hispanic owned corporations to understand cultural differences and establish HR functions that are compliant and strategic for best practices and growth.</p>
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

export default HispanicOwned;