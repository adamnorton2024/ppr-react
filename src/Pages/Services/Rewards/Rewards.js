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
        }

       #img-rewards{
            background-image: url('/assets/images/services/services_rewards.png');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
        }

        #mobile-image{
                display: none;
                @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}s) {
                    display: block;
                    object-fit: contain;
                }

                @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    display: block;
                    object-fit: contain;
                }
            }
    }

`

class Rewards extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow">
                            <div className="col-md-6 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <h1 className="display-4">Total Rewards</h1>
                                    <div className="description">
                                        <p className="lead">PPR promotes attraction, motivation and retention of employees through best practices in Total Rewards, which is a concept that describes the tools in which an employer can be highly competitive in the marketplace. Many of the Total Rewards initiatives designed by PPR are either low cost or completely free, but with a tremendous return on investment.</p>
                                        <p className="lead">According to WorldatWork (WAW), Total Rewards encompasses the elements – compensation, well-being, benefits, recognition, and development. Based on WAW’s respected research and our many years in building and implementing sound data-based Total Rewards methodologies, we can attest to tangible results in optimal organizational performance as a
                                        result of strategic and well-planned Total Rewards programs. Appreciation of employees is one of the most frequent and highly desired contributions that shows up in our employee surveys and for good reason. Here is a visual of WAW’s Total Rewards model:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 px-5 mb-0" id='img-rewards'>

                            </div>
                            <img className="img-fluid mt-0" id="mobile-image" src="/assets/images/services/services_rewards.png" alt="mobile total reward strategy" />
                        </div>

                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default Rewards;