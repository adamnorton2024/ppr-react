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

        #img-strengths{
                background-image: url('/assets/images/services/train-strengthsfinder.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
    }

`

class StrengthsFinder extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow">
                            <div className="col-md-6 col-sm-12">
                                <div className="text-box">
                                    <h1 className="display-4">StrengthsFinder</h1>
                                    <div className="description">
                                        <p className="lead">StrengthsFinder identifies areas where an individual’s greatest potential for building strengths exists. It is a philosophy of using talents as the basis for consistent achievement of excellence. Individuals are able to gain far more when they expend effort to build on their greatest talents. We all lead in very different ways based on our talents and
                        our limitations. Serious problems occur when we think we need to be exactly like any other leaders. Our sessions help employees focus on what is right with themselves and their coworkers and how to focus efforts on harnessing these strengths to be more productive and effective. When managers know the strengths of their team, they will know who will naturally be the best equipped and happiest to work on various projects and assignments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 px-5" id='img-strengths'>

                            </div>
                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default StrengthsFinder;