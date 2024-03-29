import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
          background-color: ${props => props.theme.colors.white};  
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
                .text-box{
                padding: 1em;
                .display-4{
                    margin-bottom: .5em;

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
                .strengths{
                    color: ${props => props.theme.colors.light_blue};


                    @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone}) and (max-width: ${props => props.theme.sizes.landscape_phone}) {
                    font-size: 1em;
                    }

                    @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                    font-size: 1em;
                    }
                }

            }
        }

        .employee{
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                border-radius: 50%;
                border: 3px solid ${props => props.theme.colors.orange};
                margin: 2em;
            }
        } 

`

class Adam extends Component {
    constructor() {
        super();

        this.state = {
            profilepic: "/assets/images/team/adam.jpg"
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

    }

    handleMouseOver() {
        let num = Math.random();
        if (num < 0.6) {
            this.setState({ profilepic: '/assets/images/team/adam_fun.jpg' });
        } else {
            this.setState({ profilepic: '/assets/images/team/adam_fun2.jpg' });
        }
        
    }

    handleMouseOut() {
        this.setState({ profilepic: '/assets/images/team/adam.jpg' });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner px-3 pt-3 pb-3" id="adam">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-4 col-sm-12 px-5 bg-light d-flex align-items-center">
                                <img className="img-fluid employee mx-auto"
                                    onMouseOver={this.handleMouseOver}
                                    onMouseOut={this.handleMouseOut}
                                    src={this.state.profilepic}
                                    alt="adam"
                                    id="img-adam" />
                            </div>
                            <div className="col-md-8 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <div className="description">
                                        <h1 className="display-4">Adam Norton</h1>
                                        <blockquote>
                                            <p className="lead">Chief Technology & Strategy Officer</p>
                                            <p className="strengths">Strategic | Maximizer | Achiever | Futuristic | Adaptability</p>
                                        </blockquote>

                                        <p>Adam has more than twenty-five years of experience working in many different aspects of the technology sector. He brings to PPR deep expertise in project management, software development, computer graphics and animation, multi-media, video production, full-stack web development, digital production art, and IT management. Adam excels at finding process inefficiencies and making adjustments to correct them, while ensuring visuals go from great to excellent, so he loves projects that blend technology and art. Adam has led small and large teams and has directed projects with budgets ranging from $100k to over $300 million, all to successful and timely completion. Internally, Adam is a member of the executive team and leads the build of PPR’s technical proprietary development infrastructure, IT, website, and project management tools. He also oversees all creative and innovative projects and contributes to organizational strategies. </p>

                                        <p>Adam earned a degree in Computer Animation and Multimedia, and is proficient in 12 different programming languages.</p>

                                        <p>For fun, he is an avid scuba diver who prefers to spend as much time as possible with his wife, traveling and exploring the world's oceans.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </Div>
            </ThemeProvider>
        )
    }
}

export default Adam;