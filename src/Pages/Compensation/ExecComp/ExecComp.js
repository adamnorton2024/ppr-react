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

        #img-execcomp{
                background-image: url('/assets/images/services/comp-execcomp.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
    }

`



class ExecComp extends Component {

    contactSherri() {
      const subjectLine = `Compensation Analysis Information`
      window.open(`mailto:sgates@pprhr.com?subject=${subjectLine}`);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow">
                            <div className="col-md-6 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <h1 className="display-4">Executive Compensation</h1>
                                    <div className="description">
                                        <p className="lead">Nonprofit board of directors are not only responsible for hiring the executive director/CEO but setting clear expectations for executive performance and executive compensation (salary and benefits).  PPR’s executive compensation consultants provide expertise in executive compensation and pay-for-performance alignment, all of which are grounded in market and industry practices as well as align with the “reasonable and not excessive” compensation according to the IRS.</p>
                                        <div className="mt-5">
                          
                        </div>
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

export default ExecComp;