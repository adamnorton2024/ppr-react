import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import Gabriela from './Employees/Gabriela';
import Kacye from './Employees/Kacye';
import Adam from './Employees/Adam';
import Jazmin from './Employees/Jazmin';
import Karen from './Employees/Karen';
// import Kathy from './Employees/Kathy';
import Candace from './Employees/Candace';
import Haley from './Employees/Haley';
import Hayley from './Employees/Hayley';
import Luke from './Employees/Luke';
import Mercedes from './Employees/Mercedes';
import Mikayla from './Employees/Mikayla';
import Tracy from './Employees/Tracy';
import Lauren from './Employees/Lauren';
// import Denise from './Employees/Denise';
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

    #team-header{
            background-image: url('/assets/images/team/team.jpg');
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

     

`


class Team extends Component {

    render() {
        return (
          <div>
            <HelmetProvider>
              <Helmet>
                <html lang="en" />
                <title>
                  Team - Meet your PPR Team.  We become an extension of your team - DFW Best Human Resources Consulting Firm 
                </title>
                <meta
                  name=" Meet the Team at DFW's Best Human Resources Consulting Firm"
                  content="Meet the team at PPR. When you engage PPR, you gain a team of subject matter experts across a broad range of topics."
                />
              </Helmet>
            </HelmetProvider>
            
            <ThemeProvider theme={theme}>
              <Div>
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-1">Meet The Team</h1>
                  </div>
                </div>

                <div className="section pt-3 pb-3" id="team-header">
                  <div className="row mx-0">
                    <div className="col-lg-7 col-md-12 my-5">
                      <div className="text-box">
                        <h1 className="display-4">Your Team</h1>
                        <div className="description">
                          <p className="lead">
                            At the heart of PPR is a team of exceptional
                            individuals whose daily efforts contribute to our
                            overall success. It is through the engagement and
                            dedication of each team member that PPR achieves our
                            mission and our goals. With over 80 years of
                            combined experience, we provide best practices in
                            all areas of Human Resources.
                          </p>
                          <p className="lead">
                            Every time we are engaged as a strategic HR business
                            partner, our clients receive the highest level of
                            personal commitment and a dedication that is
                            best-in-class. We pride ourselves on becoming an
                            extension of your organization in order to show a
                            unified vision to all of your employees.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Div>
            </ThemeProvider>
            <Gabriela />
            <Kacye />
            <Jazmin />
            <Adam />
            <Candace />
            <Luke />
            <Mercedes />
            <Lauren />
            <Tracy />
            <Hayley />
            <Haley />
            <Karen />
            <Mikayla />
            
            
          </div>
        );
    }
}

export default Team;