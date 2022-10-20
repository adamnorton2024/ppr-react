import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
        background-color: #f4f4f4;
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

        #img-jobdescription{
                background-image: url('/assets/images/services/comp-jd.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
    }

`



class JobDescription extends Component {

    contactSherri() {
      const subjectLine = `Compensation Analysis Information`
      window.open(`mailto:sgates@pprhr.com?subject=${subjectLine}`);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-6 col-sm-12 px-5 bg-white" id='img-jobdescription'>

                            </div>
                            <div className="col-md-6 col-sm-12 text-box-container">
                                <div className="text-box">
                                    <h1 className="display-4">Job Descriptions</h1>
                                    <div className="description">
                                        <p className="lead">A job description is a form of job documentation that explains the duties, responsibilities, and tasks of a position, along with the required experience, education, and skills needed to perform the job. Having written, accurate job descriptions is critical to successfully execute your compensation and performance management programs. Job descriptions form the basis for defining the job, which is then utilized to determine the appropriate compensation as compared to the external marketplace, career pathing, recruitment, performance management, and creating reasonable accommodations.</p>
                                        <p className='lead'>PPR will partner with you to ensure job descriptions are concise, with detailed information which allow both the employee and manager to understand the requirements and expectations for the position.   </p>
                                        <p className='lead'>PPR will:</p>
                                        <ul>
                                            <li className='lead'>Provide a Job Analysis Questionnaire (JAQ) to collect up-to-date job information for each position</li>
                                            <li className='lead'>Develop a job description template </li>
                                            <li className='lead'>Prepare job descriptions, documenting essential functions and required qualifications</li>
                                            <li className='lead'>Utilize the job descriptions to build the job architecture, determine market competitiveness and build clearly defined career paths</li>
                                        </ul>
                                        
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

export default JobDescription;