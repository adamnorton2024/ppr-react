import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import CultureDev from "./CultureDev/CultureDev";
import Performance from "./Performance/Performance";
import Policy from "./Policy/Policy";
import Strategy from './Strategy/Strategy';
import Rewards from './Rewards/Rewards';
import Workforce from './Workforce/Workforce';
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

    #services-header{
            background-image: url('/assets/images/services-banner.jpg');
            background-repeat: no-repeat;
            background-position: top right;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
            .text-box{
                background-color: rgba(63,69,97,0.85);
                border-radius: .25em;
                padding: 4em;
                color: white;

                @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phones}) {
                    padding: 2em;
                }

                @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    padding: 1.75em;
                }
                .display-4{
                    color: ${props => props.theme.colors.orange};
                    margin-bottom:.5em;

                    @media only screen and (min-width:${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
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
                }

            }
            .description{
                color: ${props => props.theme.colors.white};
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

`


class Services extends Component {

    render() {
        return (
          <div>
            <HelmetProvider>
              <Helmet>
                <html lang="en" />
                <title>Services - What Do We Do For You?  - DFW Best Human Resources Consulting Firm</title>
                <meta
                  name="description"
                  content="In today's rapidly evolving business environment, a trusted advisor who not only provides relevant insights, but delivers a combination of strategic vision, expertise and practical experience can enhance the value of your business dramatically."
                />
                <meta 
                  name='keywords'
                  content="consulting services, hr consulting, human resources, training, talent acquisition, culture development, performance management, policy, procedures, risk management, strategy, total rewards, workforce planning, talent attraction"
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

                <div className="section" id="services-header">
                  <div className="row mx-0">
                    <div className="col-lg-7 col-md-12 my-5">
                      <div className="text-box">
                        <h1 className="display-4">WHAT DO WE DO FOR YOU?</h1>
                        <div className="description">
                          <p className="lead">
                            In today's rapidly evolving business environment, a
                            trusted advisor who not only provides relevant
                            insights, but delivers a combination of strategic
                            vision, expertise and practical experience can
                            enhance the value of your business dramatically.
                          </p>
                          <p className="lead">
                            When it comes to pricing options, you are in
                            control. Many of our clients prefer a retainer in
                            order to maximize results with measured expense.
                          </p>
                          <p className="lead">
                            Our Consulting Partnerships program will help you
                            achieve your Human Resources goals where
                            expectations and deliverables are established
                            upfront. However, if a project by project
                            partnership works best, this is also available and
                            can be crafted to accommodate your unique needs.
                            With either option, you will always receive a
                            detailed invoice.
                          </p>
                          <p className="sub-title">
                            Popular Customizable Menu Options for You
                          </p>
                          <p className="lead text-center">
                            It's all up to you!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Div>
            </ThemeProvider>
            <CultureDev />
            <Performance />
            <Policy />
            <Strategy />
            <Rewards />
            <Workforce />
          </div>
        );
    }
}

export default Services;