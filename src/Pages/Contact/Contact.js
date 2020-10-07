import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import { Helmet } from "react-helmet";


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

    #contact-header{
            background-image: url('/assets/images/contact-banner.jpg');
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

                p{
                    color: white;
                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

                a{
                    color: ${props => props.theme.colors.orange};
                    text-decoration: none;

                        &:visited{
                            color: ${props => props.theme.colors.orange};
                            text-decoration: none;
                        }

                        &:hover{
                            color: ${props => props.theme.colors.white};
                            text-decoration: none;
                        }
                    }
                
                #address{
                    color: ${props => props.theme.colors.orange};
                }

            }
        }
`


class Contact extends Component {

    render() {
        return (
          <div>
            <Helmet>
              <html lang="en" />
              <title>
                Contact - PPR Human Resources Consulting and Executive Talent Attraction
                Specialist
              </title>
              <meta
                name="description"
                content="Contact PPR to discuss your HR needs."
              />
            </Helmet>
            <ThemeProvider theme={theme}>
              <Div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-1">Contact</h1>
                  </div>
                </div>

                <div className="section pt-3 pb-3" id="contact-header">
                  <div className="row mx-0 d-flex justify-content-end">
                    <div className="col-lg-7 col-md-12 my-5">
                      <div className="text-box">
                        <h1 className="display-4">Contact Us</h1>
                        <p className="sub-title">Ready to Get Started?</p>
                        <p className="lead">
                          Our team can devise a superior program that will meet
                          and exceed your needs. At People Performance
                          Resources, we are glad to demonstrate the real results
                          and success that our clients have experienced.
                        </p>
                        <p className="sub-title">
                          Contact us for more information!
                        </p>
                        <p className="lead">
                          Phone:{" "}
                          <a className="link-contact" href="tel:1-214-616-2040">
                            {" "}
                            214.616.2040
                          </a>
                        </p>
                        <p className="lead">
                          Email:{" "}
                          <a
                            className="link-contact"
                            href="mailto:info@pprhr.com?subject=Services Inquiry"
                          >
                            {" "}
                            info@pprhr.com
                          </a>
                        </p>
                        <p className="lead">Mailing Address:</p>
                        <p className="lead" id="address">
                          1914 Skillman St.
                          <br />
                          Ste. 110153
                          <br />
                          Dallas, TX 75206
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

export default Contact;