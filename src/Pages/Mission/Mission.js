import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
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

    #mission-header{
            background-image: url('/assets/images/mission-banner.jpg');
            background-repeat: no-repeat;
            background-position: center left;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
            
            .text-box{
                background-color: rgba(63,69,97,0.75);
                border-radius: .25em;
                padding: 4em;
                @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phones}) {
                    padding: 2em;
                };

                @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    padding: 1.75em;
                };
                .display-4{
                    color: ${props => props.theme.colors.orange};
                    margin-bottom:.5em;

                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                        font-size: 2em;
                    }

                    @media only screen and (max-width: {props => props.theme.sizes.portrait_phone}) {
                        font-size: 1.75em;
                    }
                }

                

                .sub-title{
                    color: ${props => props.theme.colors.orange};
                    font-size: 2em;
                    margin-top: 1em;
                }

                .lead{
                    color: ${props => props.theme.colors.white};
                    
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                  }

                p{
                    color: white;
                };

            }
                
          }  
    }  

`


class Mission extends Component {

    render() {
      return (
        <div>
          <HelmetProvider>
            <Helmet>
              <html lang="en" />
              <title>PPR - Mission, Vision, and Values  - DFW Best Human Resources Consulting Firm</title>
              <meta
                name="Mission - DFW Best Human Resources Consulting Firm"
                content="To be known and trusted as the most personalized human capital firm for small to mid-sized organizations."
              />
            </Helmet>
          </HelmetProvider>
          
          <ThemeProvider theme={theme}>
            <Div>
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-1">Mission</h1>
                </div>
              </div>

              <div className="section pt-3 pb-3" id="mission-header">
                <div className="row mx-0 d-flex justify-content-end">
                  <div className="col-lg-7 col-md-12 my-5">
                    <div className="text-box">
                      <h1 className="display-4">Mission, Vision, Values</h1>
                      <div className="description"></div>
                      <p className="sub-title">Mission</p>
                      <p className="lead">We inspire excellent workplaces.</p>
                      <p className="sub-title">Vision</p>
                      <p className="lead">
                        To be known and trusted as the most personalized human
                        capital firm for small to mid-sized organizations.
                        </p>
                      <p className="sub-title">Values</p>
                      <p className="lead">
                        Personalized Partnerships that drive Results.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </Div>
          </ThemeProvider>
        </div>
      );
    }
}

export default Mission;