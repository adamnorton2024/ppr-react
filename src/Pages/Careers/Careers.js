import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import { Helmet } from 'react-helmet';


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

    #career-header{
            background-image: url('/assets/images/career-banner.jpg');
            background-repeat: no-repeat;
            background-position: top right;
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

                p{
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

        #bzOpeningsContainer{
            background: white;
            padding-top: 5em;
            .bzOpeningsCategoryList{  /*entire list*/
                color: ${props => props.theme.colors.orange};
                list-style-type: none;
                .bzOpeningsCategory {
                    margin-top: 3em;
                    .bzCategory{
                            font-size: 1.5em;
                            margin-bottom: 1em;
                            background-color: ${props => props.theme.colors.medium_blue};
                            padding: .5em;
                            border-radius: .15em;
                        }
                    .bzOpeningsList{
                        .bzOpening{
                            list-style-type: none;
                            margin-bottom: 1.25em;
                            
                            .bzButtonApply{
                                display: none;
                            }
                            h2{
                                font-size: 1.25em;
                                

                            }
                            .bzMeta{

                            }
                        }
                    }
                }
            }
        }

        a{
            color: ${props => props.theme.colors.light_blue} !important;
            text-decoration: none;
            &:hover{
                color: ${props => props.theme.colors.orange} !important;
                text-decoration: line;
            }
        }
       

`


class Career extends Component {

    render() {
        return (
          <div>
            <Helmet>
              <html lang="en" />
              <title>
                PPR - Career Opportunities - Finding your next team member
              </title>
              <meta
                name="description"
                content="These are some of the positions we are currently sourcing for. If you or anyone you know would be a good fit, feel free to reach out to us for more information."
              />
            </Helmet>
            <ThemeProvider theme={theme}>
              <Div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-1">Career</h1>
                  </div>
                </div>

                <div className="section pt-3 pb-3" id="career-header">
                  <div className="row mx-0">
                    <div className="col-lg-7 col-md-12 my-5">
                      <div className="text-box">
                        <h1 className="display-4">Career Opportunities</h1>
                        <div className="description"></div>
                        <p className="sub-title">
                          Finding Your Next Team Member
                        </p>
                        <p className="lead">
                          These are some of the positions we are currently
                          sourcing for. If you or anyone you know would be a
                          good fit, feel free to reach out to us for more
                          information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5" id="bzOpeningsContainer"></div>
              </Div>
            </ThemeProvider>
          </div>
        );
    }
}

export default Career;