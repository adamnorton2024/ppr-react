import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
        }


        #img-marketpricing{
                background-image: url('/assets/images/services/comp-pricing.jpg');
                background-repeat: no-repeat;
                background-position: top right;
                background-size: cover;
            }
    }

`

const ContactButton = styled(Button)`{
  color: ${props => props.theme.colors.orange};

  $:hover:{
    color: ${props => props.theme.colors.white};
  }
}`

class MarketPricing extends Component {

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
                                    <h1 className="display-4">Market Pricing</h1>
                                    <div className="description">
                                        <p className="lead">Market pricing is the process of determining the competitive worth of a position. It is a vital step for organizations to attract, motivate and retain top talent. We recognize not-for-profit organizations are competing for talent across both the not-for-profit and for-profit sectors. PPR helps not-for-profit organizations understand the external marketplace to support pay decisions. Market pricing should be done periodically to ensure competitiveness over time</p>
                                        <p className='lead'>To conduct a market study, it is important to understand the components of the position to be priced, as well as the competitive labor market (e.g., geography, industry, size) within which it competes. PPR has access to salary surveys that allow us to gain access to data that is relevant to your organization.</p>
                                        <p className='lead'>Once completed, the results of the market study can be utilized to develop a salary structure and conduct a pay analysis to ensure employees are paid fair and equitable in the market as well as internally. </p>
                                        <p className='lead'>The key to market pricing jobs is to have well defined job descriptions that accurately describe the essential duties and responsibilities, education and experience and specialized skills necessary to be successful in the role.  </p>  
                                        <div className="mt-5">
                          <ContactButton variant="outline-warning" onClick={() => this.contactSherri()}>
                            Contact Us For a Free Consultation
                          </ContactButton>
                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 px-5" id='img-marketpricing'>

                            </div>
                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default MarketPricing;