import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";


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

    #blog-header{
            background-image: url('/assets/images/blog-banner.jpg');
            background-repeat: no-repeat;
            background-position: bottom right;
            background-size: cover;
            margin-top: 0px;
            margin-bottom: 0px;
            .text-box{
                background-color: rgba(63,69,97,0.75);
                border-radius: .25em;
                padding: 4em;
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
                }

                p{
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

        .blog-body{
            background-color: ${props => props.theme.colors.dark_blue};
        }

        #dib-posts{
            background-color: ${props => props.theme.colors.white};
            padding: 1em;
            margin-top: 2em;
            border-radius: .25em;
        }
       

`


class Blog extends Component {

    render() {
        return (

            <div>
                <ThemeProvider theme={theme}>
                    <Div>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">Blog</h1>
                            </div>
                        </div>

                        <div className="section pt-3 pb-3" id='blog-header'>
                            <div className="row mx-0">
                                <div className="col-lg-7 col-md-12 my-5">
                                    <div className="text-box">
                                        <h1 className="display-4">HR Insider</h1>
                                        <div className="description">
                                        </div>
                                        <p className='sub-title'>Features and Information that Matter to You</p>
                                        <p className="lead">Articles from our monthly newsletters as well as featured content to keep you up to date on our community, HR policy and law changes. We also have tips and best practice information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-body">
                            <div className="container">
                            <div className="blog-goes-here">
                                <div id="dib-posts"></div>
                            </div>
                            </div>
                        </div>
                    </Div>
                </ThemeProvider>
            </div>

        )
    }
}

export default Blog;