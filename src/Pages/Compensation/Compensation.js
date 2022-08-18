import React, { Component } from 'react';
import ExecComp from './ExecComp/ExecComp';
import CompPhilosophy from './CompPhilosophy/CompPhilosophy';
import MarketPricing from './MarketPricing/MarketPricing';
import JobDescription from './JobDescription/JobDescription';
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

    #comp-header{
            background-image: url('/assets/images/comp-banner.jpg');
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


class Compensation extends Component {

    render() {
        return (
          <div>
            <HelmetProvider>
              <Helmet>
                <html lang="en" />
                <title>Compensation Consulting Services  - DFW Best Human Resources Consulting Firm</title>
                <meta
                  name="description"
                  content="We provide comprehensive compensation consulting services to mid- and small-cap public companies and no-for-profit organization through a client-focused approach. PPR specializes in Executive Compensation, base pay administration, incentive compensation, and working closely with our clients to formulate a strategic direction for their compensation programs so they can attract, motivate, and retain top talent."
                />
                <meta 
                  name='keywords'
                  content="compensation consulting, executive compensation, compensation, pay administration, incentive compensation, incentives, retention, total rewards, compensation philosophy, market pricing, job descriptions"
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

                <div className="section pt-3 pb-3" id="comp-header">
                  <div className="row mx-0">
                    <div className="col-lg-7 col-md-12 my-5">
                      <div className="text-box">
                        <h1 className="display-4">Compensation</h1>
                        <div className="description">
                          <p className="lead">
                            People Performance Resources (PPR) provides comprehensive compensation consulting services to not-for-profit organizations, and mid- and small-cap public companies through a client-focused approach.  PPR specializes in Executive Compensation, base pay administration, incentive compensation, and working closely with our clients to formulate a strategic direction for their compensation programs so they can attract, motivate, engage and retain top talent.
                            </p>
                            <p className="lead">
                                PPR's compensation services provide leaders feasible and effective options to reward and incentives employees to be their best. We take pride in developing customized compensation programs for our clients to help achieve their business objectives.
                            </p>
                            <p className="lead">
                                We follow best practices and our commitment to excellence in the following areas of compensation:
                          </p>
                          <ul>
                            <li className="lead">Compensation Philosophy development and review</li>
                            <li className="lead">Organization-wide job documentation, analysis, and evaluation</li>
                            <li className="lead">Market Pricing of jobs to determine market competitiveness </li>
                            <li className="lead">Pay Structure development and Pay Analysis</li>
                            <li className="lead">Job Structure development and career progression/mapping</li>
                            <li className="lead">Reporting and Budget management</li>
                            <li className="lead">Variable Pay development and review</li>
                            <li className="lead">Program Implementations and Employee Communication</li>
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </Div>
            </ThemeProvider>
            <ExecComp />
            <CompPhilosophy />
            <MarketPricing />
            <JobDescription />
          </div>
        );
    }
}

export default Compensation;