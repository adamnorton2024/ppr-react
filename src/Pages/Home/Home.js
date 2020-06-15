import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import Reviews from '../../Components/Reviews/Reviews';
import ClientLogos from '../../Components/ClientLogos/ClientLogos';
import MainHeader from './MainHeader/MainHeader';

const Div = styled.div `
    .jumbotron {
        background-color: transparent;

        #ppr-logo, #think-be{
            margin-top: 1em;
            height: 70vh;
            padding: 0px;
            
        }

        #ppr-logo{
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            @media only screen and (min-width: 575.98px ) and (max-width: 768.89px) {
                    height: 15vh;
                    justify-content: flex-start;
                }

            @media only screen and (max-width: 575.98px) {
                height: 15vh;
            }
        }

        #think-be{
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
    }

`

class Home extends Component {

    render(){
        return(
            
            <div>
                <Div>
                    <ThemeProvider theme={theme}>
                    <div className="jumbotron jumbotron-fluid pt-0 pb-0 mb-0">
                        <div className="row mx-0">
                            <div className="col-md-7" id='ppr-logo'>
                                <img className='img-fluid' src="./assets/images/PPR.png" alt="PPR Logo" />
                            </div>
                            <div className="col-md-5" id='think-be'>
                                <img className='img-fluid' src="./assets/images/img-thinkdiff-bediff.png" alt="Think Different Be Different" />
                            </div>
                        </div>
                    </div>
                    </ThemeProvider>       
                </Div>
                <MainHeader />
                <Reviews />
                <ClientLogos />
            </div>
        )
    }
}

export default Home;