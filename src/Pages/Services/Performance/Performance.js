import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../../Config/Theme";

const Div = styled.div`
    .banner{
        background-color: #f4f4f4;
        padding: 3em 3em;
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

        #img-performance{
                background-image: url('/assets/images/services/services_performance.jpg');
                background-repeat: no-repeat;
                background-position: center right;
                background-size: cover;
            }
    }

`

class Performance extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Div>
                    <section className="banner">
                        <div className="row mx-0 shadow bg-white">
                            <div className="col-md-6 col-sm-12 px-5 bg-white" id='img-performance'>

                            </div>
                            <div className="col-md-6 col-sm-12 px-5 my-5">
                                <div className="text-box">
                                    <h1 className="display-4">Performance Management</h1>
                                    <div className="description">
                                        <p className="lead">After creating and managing performance reviews the “old way”, our team learned the many challenges with backwards looking performance assessment vs real-time ongoing coaching. Trained under Gallup’s revolutionary, fact based and state-of-the-art methodologies, PPR internally tested and adjusted tools before presenting to clients. After five years and many introductions to this new process, we have seen consistent results that have yield: highly successful ways to establish frequent communication between managers and employees, accomplishment of organizational strategic objectives, well aligned and achieved individual goals, expectations clarified and elevated accountability, enhanced trust through open dialogue, management and employee growth, greater cohesion and overall increased employee engagement. Here are the
                        top areas we support:</p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <ul>
                                                    <li className="lead">Performance Management Re-Invention</li>
                                                    <li className="lead">Competency Model Mapping</li>
                                                    <li className="lead">Top Performer Recognition</li>
                                                    <li className="lead">Coaching and Leading through Influence</li>
                                                    <li className="lead">Employee Development</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <ul>
                                                    <li className="lead">Goals – both Strategic Organizational Objectives and Individual</li>
                                                    <li className="lead">Culture Enhancement</li>
                                                    <li className="lead">Morale and Trust Boost</li>
                                                    <li className="lead">Retention Best Practices</li>
                                                </ul>
                                            </div>
                                        </div>
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

export default Performance;