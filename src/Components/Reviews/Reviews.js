import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import Carousel from 'react-bootstrap/Carousel'

const ReviewsSection = styled.section`
    background-color: #f4f4f4;
    text-align: center;

    .display-4{
        padding: 1em 0em;
        margin-bottom: 0px;
        color: ${props => props.theme.colors.light_blue}; 
        font-size: 2em;
        @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phones}) {
                        font-size: 2em;
                    }

        @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
            font-size: 1.75em;
        }
    }

    .box {
        background-color: rgba(63,69,97,0.75);
        border-radius: .5em;
        padding: 3em;
        border: .25em solid #f4f4f4;
        margin-bottom: 2em;
        margin-top: 0em;

        .logo{
            display: flex;
            justify-content: center;
            align-content: center;
             @media only screen and (min-width: ${props => props.theme.sizes.portrait_phone} ) and (max-width: ${props => props.theme.sizes.landscape_phones}) {
                        margin-bottom: 1em;
                    }

            @media only screen and (max-width: ${props => props.theme.sizes.portrait_phone}) {
                margin-bottom: 1em;
            }

            .review-logos{
                max-height: 7em;
            }
        }
    }

    p{
    color: white;
    font-size: .8em;
    text-align: left;

    .client{
    font-style: italic;
}
}
`

class Reviews extends Component {

    render(){
        return(
            <ThemeProvider theme={theme}>
            <ReviewsSection id="reviews">
                    <div className="mx-auto">
                        <h1 className="display-4">What Our Clients Are Saying</h1>
                    </div>
                <div className="container">
                    <Carousel>
                        <Carousel.Item className='box'>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="logo">
                                        <img className="img-fluid review-logos"src="./assets/images/logos/logo-swmf.png" alt="Southwester Medical Foundation Logo" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <p>"People Performance Resources has depth and expertise in all aspects of Human Resource management. They are tremendous partners willing to understand and share industry best practices and collaborate with our management team to build and sustain a leading HR practice meeting our needs in compliance, risk management, talent management, recruitment, talent development, compensation, and benefits. They have been willing to work as partners
                                to understand what is best for our unique, complex, and fast-growing business. This partnership has been crucial in helping Southwestern Medical Foundation achieve significant growth and continuity goals.”</p>
                                    <p className="client">- Southwestern Medical Foundation</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='box'>
                            <div className="row">
                                    <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="logo">
                                        <img className="img-fluid review-logos" src="./assets/images/logos/logo-vvf.png" alt="Verde Valle Foods Logo" />
                                    </div>
                                </div>
                                    <div className="col-lg-8 col-md-12">
                                    <p>“Our partnership with PPR continues to be a great one. Since the beginning Verde Valle the #1 Rice and Bean company in Mexico with Gabriela Norton and her team have worked in lockstep to execute the U.S. growth strategy. PPR continues to provide invaluable guidance and expertise in recruitment, onboarding and employee development for our U.S. based team.”</p>
                                    <p className="client">- Verde Valle Foods</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='box'>
                            <div className="row">
                                    <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="logo">
                                        <img className="img-fluid review-logos" src="./assets/images/logos/logo-je.png" alt="Joshua Expeditions Logo" />
                                    </div>
                                </div>
                                    <div className="col-lg-8 col-md-12">
                                    <p>“We have not been using People Performance Resources (or PPR) for a long time but in the time that we have partnered with PPR, I am very impressed with their level of respect for my time as well as budget. They respond well to my needs and limits and have been a great resource of making sure we are up to date with all state and federal regulations which has been a huge help and stress relief for my company.”</p>
                                    <p className="client">- Joshua Expeditions</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='box'>
                            <div className="row">
                                    <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="logo">
                                        <img className="img-fluid review-logos" src="./assets/images/logos/logo-ps.png" alt="Premier Services Logo" />
                                    </div>
                                </div>
                                    <div className="col-lg-8 col-md-12">
                                    <p>“Our partnership with People Performance Resources (or PPR) has resulted in one of the best decisions we have made.Their team of experts is extremely knowledgeable and experienced in all aspects of Human Resource management and compliance. Our management team is more confident knowing that they are our partner and that they care about the success and sustainability of our company.”</p>
                                    <p className="client">- Premier Services</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='box'>
                            <div className="row">
                                    <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center">
                                    <div className="logo">
                                        <img className="img-fluid review-logos" src="./assets/images/logos/logo-ntfb.png" alt="North Texas Food Bank Logo" />
                                    </div>
                                </div>
                                    <div className="col-lg-8 col-md-12">
                                    <p>"PPR has taken an objective look at our current pay structure to complete a compensation review and analysis. They’ve developed a new methodology for us to filter how positions are aligned into our salary grades. The project has been very
                                    comprehensive and very well thought through."</p>
                                    <p className="client">- North Texas Food Bank</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='box'>
                            <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                    <div className="logo">
                                        <img className="img-fluid review-logos" src="./assets/images/logos/logo-dt.png" alt="Dura-Tech Logo" />
                                    </div>
                                </div>
                                    <div className="col-lg-8 col-md-12">
                                    <p>"PPR has helped dramatically improve our culture throughout all levels of the company and assisted with upgrading our employee manual, payroll service, onboarding process, strategic planning, and general HR support. As a small business, PPR gives us the depth of a much larger HR department and a comprehensive resource when any issues arise."
                                </p>
                                    <p className="client">- Dura-Tech</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='box'>
                            <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                    <div className="logo">
                                        <img className="img-fluid review-logos" src="./assets/images/logos/logo-wac.png" alt="World Affairs Council Logo" />
                                    </div>
                                </div>
                                    <div className="col-lg-8 col-md-12">
                                    <p>"PPR guided us through an efficient and thorough interview process, and helped us zero in on the best candidate. Then PPR assisted us through the hiring process, to a successful conclusion."
                                </p>
                                    <p className="client">- World Affairs Council</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </ReviewsSection>
            </ThemeProvider>
        )
    }
}

export default Reviews;