import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    #bi-header{
            background-image: url('/assets/images/bi-cultural-banner.jpg');
            background-repeat: no-repeat;
            background-position: top right;
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

                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                        font-size: 2em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}s) {
                        font-size: 1.75em;
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

                .sub-title{
                    color: ${props => props.theme.colors.orange};
                    font-size: 2em;
                    margin-top: 1em;
                }
                
            }
        }
`


class BiHeader extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <div className="section pt-3 pb-3" id='bi-header'>
                        <div className="row mx-0">
                            <div className="col-lg-7 col-md-12 my-5">
                                <div className="text-box">
                                    <h1 className="display-4">Bi-Cultural Enterprise</h1>
                                    <div className="description">
                                        <p className="lead">PPR provides deep knowledge, understanding, and support of bi-cultural needs. Not just from a Spanish language standpoint, but also from a cultural perspective.</p>
                                        <p className="lead">Your ability to successfully communicate and lead your Hispanic workforce is a valuable priority and our team has a proven track record of successfully bridging the communication gap.</p>
                                        <p className="lead">Our bilingual and bi-cultural experts provide a specialized combination of cultural knowledge and Spanish support in all HR functions. This includes employee relations, translations of policies, employee handbooks and procedures, employee meetings to include open enrollment, organizational development, strategic planning and development, change management,
                                        employment compliance, organizational development, and recruiting.</p>
                                        <p className="lead">Our hands-on knowledge with Hispanic based companies and workforce has supported clients in three critical areas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Div>
            </ThemeProvider>
        )
    }
}

export default BiHeader;