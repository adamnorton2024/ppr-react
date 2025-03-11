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

        .blog-body{
            margin-top: 2em;
        }

        #dib-posts{
            background-color: ${props => props.theme.colors.white};
            padding: 1em;
            margin-top: 2em;
            border-radius: .25em;
        }
       

`


class Blog extends Component {

  componentDidMount() {
    if (!document.getElementById('dropinblog-script')) {
        const script = document.createElement('script');
        script.src = "https://io.dropinblog.com/embedjs/ZKG80AT6VZR7NSLZCG7V.js"; // replace with your actual URL
        script.async = true;
        script.id = "dropinblog-script";
        script.onload = () => {
            if (window.DIB && window.DIB.reload) {
                window.DIB.reload();
            }
        };
        document.body.appendChild(script);
    } else if (window.DIB && window.DIB.reload) {
        window.DIB.reload();
    }
}

componentDidUpdate(prevProps) {
  // Force reload if navigation occurred or props changed
  if (this.props.location !== prevProps.location && window.DIB && window.DIB.reload) {
      window.DIB.reload();
  }
}



    render() {
        return (
          <div>
            <HelmetProvider>
              <Helmet>
                <html lang="en" />
                <title>HR Insider - People Performance Resources - Blog</title>
                <meta
                  name="description"
                  content="HR Insider - People Performance Resources - Features and Information that Matter to You - Blog - Newsletter"
                />
                <meta
                  name="keywords"
                  content="hr, human resources, articles"
                />
              </Helmet>
            </HelmetProvider>
            
            <ThemeProvider theme={theme}>
              <Div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-1">Blog</h1>
                  </div>
                </div>

                <div className="section pt-3 pb-3" id="blog-header">
                  <div className="row mx-0">
                    <div className="col-lg-7 col-md-12 my-5">
                      <div className="text-box">
                        <h1 className="display-4">HR Insider</h1>
                        <div className="description"></div>
                        <p className="sub-title">
                          Features and Information that Matter to You
                        </p>
                        <p className="lead">
                          Articles from our monthly newsletters as well as
                          featured content to keep you up to date on our
                          community, HR policy and law changes. We also have
                          tips and best practice information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-body">
                  <div className="container">
                    <div className="blog-goes-here">
                      <div className="mt-0" id="dib-posts"></div>
                    </div>
                  </div>
                </div>
              </Div>
            </ThemeProvider>
          </div>
        );
    }
}

export default Blog;