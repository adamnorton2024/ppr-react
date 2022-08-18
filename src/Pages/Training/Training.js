import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import StrengthsFinder from './StrengthsFinder/StrengthsFinder';
import Coaching from './Coaching/Coaching';
import Compliance from './Compliance/Compliance';
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

    #training-header{
            background-image: url('/assets/images/train-banner2.jpg');
            background-repeat: no-repeat;
            background-position: bottom center;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
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

                li{
                    color: ${props => props.theme.colors.white};

                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

            }
            .description{
                color: ${props => props.theme.colors.white};
                text-shadow: 1px 1px black;
                .lead{
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

                
            }
        }  

`


class Training extends Component {

    render() {
        return (
          <div>
            <HelmetProvider>
              <Helmet>
                <html lang="en" />
                <title>Training and Development  - DFW Best Human Resources Consulting Firm</title>
                <meta
                  name="description"
                  content="Presentations are customized according to your specific needs. Our sessions can be delivered as part of a team meeting, a stand-alone training session, or Lunch-and-Learns."
                />
                <meta
                  name="keywords"
                  content="training, development, strengthsfinder, compliance, executive coaching"
                />
              </Helmet>
            </HelmetProvider>
            
            <ThemeProvider theme={theme}>
              <Div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-1">Services</h1>
                  </div>
                </div>

                <div className="section pt-3 pb-3" id="training-header">
                  <div className="row mx-0">
                    <div className="col-lg-7 col-md-12 my-5">
                      <div className="text-box">
                        <h1 className="display-4">Training and Development</h1>
                        <div className="description">
                          <p className="lead">
                            Presentations are customized according to your
                            specific needs. Our sessions can be delivered as
                            part of a team meeting, a stand-alone training
                            session, or Lunch-and-Learns.
                          </p>
                          <p className="sub-title">Top 10 HR Issues</p>
                        <ul>
                          <li className="lead">Retention</li>
                          <li className="lead">Hiring Practices</li>
                          <li className="lead">Fair Labor Standards Act</li>
                          <li className="lead">Employee Handbooks</li>
                          <li className="lead">Harassment</li>
                          <li className="lead">Family Medical Leave Act</li>
                          <li className="lead">Workers' Compensation</li>
                          <li className="lead">
                            Employee Descipline & Termination
                          </li>
                          <li className="lead">Protected Activities</li>
                          <li className="lead">Payroll</li>
                        </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </Div>
            </ThemeProvider>
            <StrengthsFinder />
            <Compliance />
            <Coaching />
          </div>
        );
    }
}

export default Training;